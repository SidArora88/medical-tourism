const fs = require('fs');
const path = require('path');

// Patient data from reviews
const patients = [
    { name: "Ahmed Hassan", country: "Egypt", gender: "male" },
    { name: "Fatima Al-Zahra", country: "UAE", gender: "female" },
    { name: "Mohammed Osei", country: "Ghana", gender: "male" },
    { name: "Zara Mbeki", country: "South Africa", gender: "female" },
    { name: "Omar Al-Rashid", country: "Saudi Arabia", gender: "male" },
    { name: "Grace Okafor", country: "Nigeria", gender: "female" },
    { name: "Hassan Al-Mansoori", country: "Qatar", gender: "male" },
    { name: "Amina Traore", country: "Mali", gender: "female" },
    { name: "David Mutua", country: "Kenya", gender: "male" },
    { name: "Leyla Ozturk", country: "Turkey", gender: "female" },
    { name: "Ibrahim Diallo", country: "Senegal", gender: "male" },
    { name: "Noura Al-Sabah", country: "Kuwait", gender: "female" },
    { name: "Samuel Ochieng", country: "Kenya", gender: "male" },
    { name: "Maryam Jaber", country: "Lebanon", gender: "female" },
    { name: "Kwame Asante", country: "Ghana", gender: "male" },
    { name: "Aaliya Hassan", country: "Pakistan", gender: "female" },
    { name: "Fatou Sow", country: "Senegal", gender: "female" },
    { name: "Youssef El-Masry", country: "Egypt", gender: "male" },
    { name: "Halima Al-Zahra", country: "Iraq", gender: "female" },
    { name: "John Ouma", country: "Uganda", gender: "male" },
    { name: "Amira Benali", country: "Morocco", gender: "female" },
    { name: "Tariq Al-Mansouri", country: "Oman", gender: "male" },
    { name: "Esther Mwangi", country: "Kenya", gender: "female" },
    { name: "Rashid Al-Maktoum", country: "UAE", gender: "male" },
    { name: "Fatima Kone", country: "Ivory Coast", gender: "female" },
    { name: "Ali Al-Rashid", country: "Jordan", gender: "male" },
    { name: "Grace Mensah", country: "Ghana", gender: "female" },
    { name: "Mahmoud Farouk", country: "Egypt", gender: "male" },
    { name: "Aisha Osman", country: "Sudan", gender: "female" },
    { name: "Hassan Al-Dosari", country: "Bahrain", gender: "male" },
    { name: "Mariam Sesay", country: "Sierra Leone", gender: "female" },
    { name: "Omar Belkadi", country: "Algeria", gender: "male" },
    { name: "Hadiya Al-Sabah", country: "Kuwait", gender: "female" },
    { name: "Joseph Ankrah", country: "Ghana", gender: "male" },
    { name: "Nadia Al-Masri", country: "Syria", gender: "female" },
    { name: "Emmanuel Nyong", country: "Cameroon", gender: "male" },
    { name: "Salma Al-Zahra", country: "Yemen", gender: "female" },
    { name: "Kwaku Osei", country: "Ghana", gender: "male" },
    { name: "Zineb Benali", country: "Morocco", gender: "female" },
    { name: "Ahmed Al-Dosari", country: "Qatar", gender: "male" },
    { name: "Fatima Keita", country: "Mali", gender: "female" },
    { name: "Ibrahim Okafor", country: "Nigeria", gender: "male" },
    { name: "Layla Al-Rashid", country: "UAE", gender: "female" },
    { name: "Moses Nkomo", country: "Zimbabwe", gender: "male" },
    { name: "Yasmin Al-Mansoori", country: "Oman", gender: "female" },
    { name: "Adama Traore", country: "Burkina Faso", gender: "male" },
    { name: "Khalid Al-Sabah", country: "Kuwait", gender: "male" },
    { name: "Amina Diallo", country: "Guinea", gender: "female" },
    { name: "Samir Belkacem", country: "Algeria", gender: "male" },
    { name: "Hauwa Ibrahim", country: "Nigeria", gender: "female" },
    { name: "Mahmoud Al-Dosari", country: "Bahrain", gender: "male" }
];

// Country color schemes based on flag colors
const countryColors = {
    "Egypt": { primary: "#DC2626", secondary: "#FBBF24" },
    "UAE": { primary: "#059669", secondary: "#DC2626" },
    "Ghana": { primary: "#DC2626", secondary: "#FBBF24" },
    "South Africa": { primary: "#1F2937", secondary: "#FBBF24" },
    "Saudi Arabia": { primary: "#059669", secondary: "#FFFFFF" },
    "Nigeria": { primary: "#059669", secondary: "#FFFFFF" },
    "Qatar": { primary: "#7C2D12", secondary: "#FFFFFF" },
    "Mali": { primary: "#059669", secondary: "#FBBF24" },
    "Kenya": { primary: "#1F2937", secondary: "#DC2626" },
    "Turkey": { primary: "#DC2626", secondary: "#FFFFFF" },
    "Senegal": { primary: "#059669", secondary: "#FBBF24" },
    "Kuwait": { primary: "#059669", secondary: "#FFFFFF" },
    "Lebanon": { primary: "#DC2626", secondary: "#FFFFFF" },
    "Pakistan": { primary: "#059669", secondary: "#FFFFFF" },
    "Iraq": { primary: "#DC2626", secondary: "#FFFFFF" },
    "Uganda": { primary: "#1F2937", secondary: "#FBBF24" },
    "Morocco": { primary: "#DC2626", secondary: "#059669" },
    "Oman": { primary: "#DC2626", secondary: "#FFFFFF" },
    "Jordan": { primary: "#1F2937", secondary: "#FFFFFF" },
    "Sudan": { primary: "#DC2626", secondary: "#FFFFFF" },
    "Bahrain": { primary: "#DC2626", secondary: "#FFFFFF" },
    "Sierra Leone": { primary: "#059669", secondary: "#FFFFFF" },
    "Algeria": { primary: "#059669", secondary: "#FFFFFF" },
    "Ivory Coast": { primary: "#F97316", secondary: "#FFFFFF" },
    "Syria": { primary: "#DC2626", secondary: "#FFFFFF" },
    "Cameroon": { primary: "#059669", secondary: "#DC2626" },
    "Yemen": { primary: "#DC2626", secondary: "#FFFFFF" },
    "Burkina Faso": { primary: "#DC2626", secondary: "#FFFFFF" },
    "Guinea": { primary: "#DC2626", secondary: "#FBBF24" },
    "Zimbabwe": { primary: "#059669", secondary: "#FBBF24" }
};

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function createPatientAvatar(patient) {
    const initials = getInitials(patient.name);
    const colors = countryColors[patient.country] || { primary: "#2563EB", secondary: "#10B981" };
    
    // Adjust colors for gender
    let primaryColor = colors.primary;
    let secondaryColor = colors.secondary;
    
    if (patient.gender === 'female') {
        // Add pink tint for female patients
        primaryColor = patient.country === 'Egypt' ? '#DB2777' : 
                      patient.country === 'UAE' ? '#DB2777' :
                      patient.country === 'Ghana' ? '#DB2777' :
                      patient.country === 'Nigeria' ? '#DB2777' : '#DB2777';
        secondaryColor = '#F472B6';
    }
    
    const filename = patient.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '.svg';
    
    const svg = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient-${filename}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primaryColor};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondaryColor};stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="30" cy="30" r="27" fill="url(#gradient-${filename})" stroke="#E2E8F0" stroke-width="3"/>
  <text x="30" y="37" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="600" text-anchor="middle" fill="white" style="text-shadow: 0 1px 2px rgba(0,0,0,0.1)">${initials}</text>
</svg>`;
    
    return { filename, svg };
}

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images', 'patients');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate all patient avatars
patients.forEach(patient => {
    const { filename, svg } = createPatientAvatar(patient);
    const filepath = path.join(imagesDir, filename);
    
    fs.writeFileSync(filepath, svg);
    console.log(`Created avatar: ${filename}`);
});

console.log(`Generated ${patients.length} patient avatars in ${imagesDir}`);