const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { google } = require('googleapis');
const validator = require('validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Form submission rate limiting (stricter)
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 form submissions per 15 minutes
  message: 'Too many form submissions, please try again later.'
});

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Consultations';

// Initialize Google Sheets API
async function getGoogleSheetsInstance() {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_FILE,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: authClient });
    
    return sheets;
  } catch (error) {
    console.error('Error initializing Google Sheets API:', error);
    throw error;
  }
}

// Validation functions
function validateFormData(data) {
  const errors = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  if (data.name && data.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Email validation
  if (!data.email || !validator.isEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }

  // Phone validation
  if (!data.phone || !validator.isMobilePhone(data.phone, 'any', { strictMode: false })) {
    errors.push('Please provide a valid phone number');
  }

  // Treatment validation
  const validTreatments = ['cardiology', 'oncology', 'orthopedics', 'cosmetic', 'dental', 'fertility', 'other'];
  if (!data.treatment || !validTreatments.includes(data.treatment)) {
    errors.push('Please select a valid treatment type');
  }

  // Message validation (optional but if provided, should be reasonable length)
  if (data.message && data.message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }

  return errors;
}

// Sanitize data
function sanitizeFormData(data) {
  return {
    name: validator.escape(data.name?.trim() || ''),
    email: validator.normalizeEmail(data.email?.trim() || ''),
    phone: data.phone?.trim() || '',
    treatment: data.treatment?.trim() || '',
    message: validator.escape(data.message?.trim() || '')
  };
}

// Add data to Google Sheets
async function addToGoogleSheets(formData) {
  try {
    const sheets = await getGoogleSheetsInstance();
    
    const timestamp = new Date().toISOString();
    const values = [
      [
        timestamp,
        formData.name,
        formData.email,
        formData.phone,
        formData.treatment,
        formData.message
      ]
    ];

    const resource = {
      values: values
    };

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'RAW',
      resource: resource
    });

    return result;
  } catch (error) {
    console.error('Error adding data to Google Sheets:', error);
    throw error;
  }
}

// Initialize Google Sheets headers
async function initializeSheetHeaders() {
  try {
    const sheets = await getGoogleSheetsInstance();
    
    // Check if headers exist
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1:F1`
    });

    // If no headers found, add them
    if (!response.data.values || response.data.values.length === 0) {
      const headers = [['Timestamp', 'Name', 'Email', 'Phone', 'Treatment', 'Message']];
      
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A1:F1`,
        valueInputOption: 'RAW',
        resource: { values: headers }
      });
      
      console.log('Headers added to Google Sheet');
    }
  } catch (error) {
    console.error('Error initializing sheet headers:', error);
  }
}

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Medical Tourism Backend API',
    status: 'healthy',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Form submission endpoint
app.post('/api/submit-consultation', formLimiter, async (req, res) => {
  try {
    console.log('Received form submission:', req.body);

    // Validate required environment variables
    if (!SPREADSHEET_ID) {
      return res.status(500).json({
        success: false,
        message: 'Server configuration error. Please contact support.'
      });
    }

    // Sanitize input data
    const sanitizedData = sanitizeFormData(req.body);

    // Validate form data
    const validationErrors = validateFormData(sanitizedData);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    // Add to Google Sheets
    await addToGoogleSheets(sanitizedData);

    // Send success response
    res.json({
      success: true,
      message: 'Thank you! We\'ll contact you within 24 hours with a personalized treatment plan.'
    });

    // Log successful submission (without sensitive data)
    console.log(`Form submission successful: ${sanitizedData.email} - ${sanitizedData.treatment}`);

  } catch (error) {
    console.error('Error processing form submission:', error);
    
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  // Initialize Google Sheets headers on startup
  try {
    await initializeSheetHeaders();
    console.log('Google Sheets integration ready');
  } catch (error) {
    console.error('Warning: Could not initialize Google Sheets. Check your configuration.');
  }
});

module.exports = app;