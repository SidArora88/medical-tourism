# Patient Avatar Images Setup Guide

## Overview
The patient reviews section requires 51 professional avatar images representing patients from Middle East and African countries. These should be diverse, respectful, and culturally appropriate.

## Image Requirements

### Technical Specifications
- **Format**: JPEG (.jpg)
- **Size**: 300x300 pixels (square)
- **File size**: Under 50KB each
- **Quality**: High resolution, professional appearance

### Diversity Requirements
- **Geographic Representation**: 
  - Middle East: UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, Egypt, Jordan, Lebanon, Iraq, Syria, Yemen
  - Africa: Nigeria, Ghana, Kenya, South Africa, Morocco, Algeria, Mali, Senegal, Guinea, Cameroon, etc.
- **Gender**: Balanced male/female representation
- **Age Range**: 25-65 years (medical tourism typical age range)
- **Cultural Sensitivity**: Respectful representation of diverse ethnicities

## File Naming Convention
Images should be named exactly as specified in the JavaScript data:

```
images/patients/ahmed-hassan.jpg
images/patients/fatima-alzahra.jpg
images/patients/mohammed-osei.jpg
images/patients/zara-mbeki.jpg
images/patients/omar-alrashid.jpg
... (continue for all 51 patients)
```

## Recommended Sources

### Option 1: Professional Avatar Generators
- **This Person Does Not Exist** (https://thispersondoesnotexist.com)
- **Generated Photos** (https://generated.photos)
- **Artbreeder** (https://artbreeder.com)

### Option 2: Stock Photo Services
- **Shutterstock** (diverse professional headshots)
- **Getty Images** (cultural diversity collections)
- **Unsplash** (free professional portraits)

### Option 3: Custom Illustration
- Commission diverse avatar illustrations
- Ensure cultural authenticity and respect

## Implementation Steps

1. **Create Images**: Generate or source 51 diverse professional avatars
2. **Resize & Optimize**: Ensure all images are 300x300px, under 50KB
3. **Rename Files**: Use exact filenames from the patient data
4. **Upload to Directory**: Place in `/images/patients/` folder
5. **Test Fallback**: Ensure `default-avatar.jpg` works for missing images

## Cultural Considerations

### Middle Eastern Patients
- Professional business attire
- Both hijab-wearing and non-hijab-wearing women
- Diverse ethnic backgrounds (Arab, Persian, Turkish, etc.)
- Professional, trustworthy appearance

### African Patients
- Represent diverse African ethnicities
- Professional medical tourism demographic
- Mix of traditional and modern professional styling
- Various skin tones and facial features

## Quality Checklist
- [ ] All 51 images created and properly named
- [ ] Images are 300x300 pixels, under 50KB
- [ ] Diverse representation across cultures and genders
- [ ] Professional, trustworthy appearance
- [ ] Culturally appropriate and respectful
- [ ] Default fallback image in place
- [ ] All images load correctly on the reviews page

## Alternative Quick Setup
For immediate deployment, you can:
1. Use the provided `default-avatar.jpg` for all patients initially
2. Gradually replace with specific patient avatars
3. The JavaScript will automatically fall back to default if specific images are missing

## Legal Considerations
- Ensure all images are licensed for commercial use
- Consider privacy implications of using real photos
- AI-generated images are recommended for avoiding privacy issues
- Maintain model releases if using stock photography

This setup will provide authentic, diverse representation while maintaining patient privacy and cultural sensitivity.