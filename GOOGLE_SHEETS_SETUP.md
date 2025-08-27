# Google Sheets API Setup Guide

This guide will help you set up Google Sheets API integration to store form submissions from your medical tourism website.

## Prerequisites

- Google account
- Google Cloud Console access
- Node.js installed on your system

## Step-by-Step Setup

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project" or select existing project
3. Give your project a name (e.g., "medical-tourism-forms")
4. Click "Create"

### 2. Enable Google Sheets API

1. In Google Cloud Console, go to **APIs & Services > Library**
2. Search for "Google Sheets API"
3. Click on "Google Sheets API"
4. Click "Enable"

### 3. Create Service Account

1. Go to **APIs & Services > Credentials**
2. Click "Create Credentials" > "Service Account"
3. Fill in the details:
   - Service account name: `medical-tourism-sheets`
   - Service account ID: (auto-generated)
   - Description: `Service account for medical tourism form submissions`
4. Click "Create and Continue"
5. Skip role assignment for now (click "Continue")
6. Skip granting users access (click "Done")

### 4. Generate Service Account Key

1. In the Credentials page, find your newly created service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Select "JSON" format
6. Click "Create"
7. **IMPORTANT**: Save the downloaded JSON file as `google-service-account.json` in your project directory
8. **SECURITY**: Never commit this file to version control!

### 5. Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Medical Tourism Consultations" (or your preferred name)
4. Note the **Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```
5. Copy this ID - you'll need it for configuration

### 6. Share Sheet with Service Account

1. In your Google Sheet, click "Share" button
2. Paste the service account email (from the JSON file, field: `client_email`)
3. Set permission to "Editor"
4. Uncheck "Notify people"
5. Click "Share"

### 7. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` file with your values:
   ```env
   GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_from_step_5
   GOOGLE_SHEET_NAME=Consultations
   GOOGLE_SERVICE_ACCOUNT_KEY_FILE=./google-service-account.json
   PORT=3000
   FRONTEND_URL=http://localhost:8000
   ```

### 8. Install Dependencies

```bash
npm install
```

### 9. Start the Backend Server

```bash
# Development mode (with auto-restart)
npm run dev

# Or production mode
npm start
```

You should see:
```
Server running on port 3000
Headers added to Google Sheet
Google Sheets integration ready
```

### 10. Test the Integration

1. Open your website (`index.html`)
2. Fill out the contact form
3. Submit the form
4. Check your Google Sheet - new submissions should appear automatically!

## Sheet Structure

The system will automatically create these columns in your Google Sheet:

| Timestamp | Name | Email | Phone | Treatment | Message |
|-----------|------|-------|-------|-----------|---------|
| 2024-01-01T10:00:00.000Z | John Doe | john@example.com | +1234567890 | cardiology | Looking for treatment options |

## Security Features

✅ **Rate Limiting**: Prevents spam submissions
✅ **Input Validation**: Sanitizes and validates all form data
✅ **CORS Protection**: Only allows requests from your frontend
✅ **Data Sanitization**: Prevents XSS attacks
✅ **Environment Variables**: Keeps sensitive data secure

## Troubleshooting

### Common Issues

**1. "Server configuration error"**
- Check that `GOOGLE_SPREADSHEET_ID` is set in `.env`
- Verify the spreadsheet ID is correct

**2. "Authentication failed"**
- Ensure `google-service-account.json` file exists
- Check that the service account email has access to the sheet
- Verify the JSON file is valid

**3. "Permission denied"**
- Make sure you shared the sheet with the service account email
- Grant "Editor" permissions to the service account

**4. "Unable to connect to server"**
- Ensure the backend server is running on port 3000
- Check that there are no firewall issues

**5. CORS errors**
- Update `FRONTEND_URL` in `.env` to match your frontend URL
- For production, set this to your actual domain

### Verification Steps

1. **Test API endpoint directly**:
   ```bash
   curl -X POST http://localhost:3000/api/submit-consultation \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","phone":"1234567890","treatment":"cardiology","message":"Test message"}'
   ```

2. **Check server logs** for detailed error messages

3. **Verify Google Sheets API quota** in Google Cloud Console

## Production Deployment

### Environment Variables for Production

```env
GOOGLE_SPREADSHEET_ID=your_production_spreadsheet_id
GOOGLE_SHEET_NAME=Consultations
GOOGLE_SERVICE_ACCOUNT_KEY_FILE=./google-service-account.json
PORT=3000
FRONTEND_URL=https://yourdomain.com
```

### Security Considerations

- Use HTTPS in production
- Set up proper firewall rules
- Monitor API usage and costs
- Regular backup of Google Sheets data
- Consider using Google Sheets API quotas

### Deployment Options

- **Heroku**: Easy deployment with environment variables
- **Vercel**: Serverless functions
- **AWS EC2**: Full control over server
- **Google Cloud Run**: Container-based deployment

## API Endpoints

### POST /api/submit-consultation

Submit a new consultation request.

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "phone": "+1234567890",
  "treatment": "cardiology",
  "message": "Looking for treatment options"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Thank you! We'll contact you within 24 hours with a personalized treatment plan."
}
```

### GET /health

Check server health status.

**Response**:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T10:00:00.000Z"
}
```

## Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify all setup steps were completed
3. Check server logs for detailed error messages
4. Ensure Google Cloud billing is enabled (if required)

## Cost Considerations

- Google Sheets API: Free tier includes 100 requests per 100 seconds per user
- Google Cloud: Minimal costs for API usage
- Consider monitoring usage in Google Cloud Console