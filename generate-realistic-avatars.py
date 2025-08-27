#!/usr/bin/env python3
"""
Generate realistic patient avatar images using AI
This script creates professional headshot-style images for each patient
"""

import os
import json
from pathlib import Path

# Patient data with demographics for AI generation
patients = [
    {"name": "Ahmed Hassan", "country": "Egypt", "gender": "male", "age": "50s", "description": "Middle Eastern man, professional, warm smile"},
    {"name": "Fatima Al-Zahra", "country": "UAE", "gender": "female", "age": "40s", "description": "Middle Eastern woman, professional attire, confident expression"},
    {"name": "Mohammed Osei", "country": "Ghana", "gender": "male", "age": "35", "description": "West African man, business casual, friendly demeanor"},
    {"name": "Zara Mbeki", "country": "South Africa", "gender": "female", "age": "45", "description": "South African woman, professional headshot, determined expression"},
    {"name": "Omar Al-Rashid", "country": "Saudi Arabia", "gender": "male", "age": "40s", "description": "Middle Eastern man, traditional yet modern look, trustworthy"},
    {"name": "Grace Okafor", "country": "Nigeria", "gender": "female", "age": "30s", "description": "West African woman, bright smile, professional appearance"},
    {"name": "Hassan Al-Mansoori", "country": "Qatar", "gender": "male", "age": "60s", "description": "Middle Eastern elderly man, distinguished, gray hair"},
    {"name": "Amina Traore", "country": "Mali", "gender": "female", "age": "50s", "description": "West African woman, traditional headwrap, wise expression"},
    {"name": "David Mutua", "country": "Kenya", "gender": "male", "age": "40s", "description": "East African man, professional attire, confident smile"},
    {"name": "Leyla Ozturk", "country": "Turkey", "gender": "female", "age": "30s", "description": "Turkish woman, modern professional, warm expression"},
    {"name": "Ibrahim Diallo", "country": "Senegal", "gender": "male", "age": "70s", "description": "West African elderly man, glasses, scholarly appearance"},
    {"name": "Noura Al-Sabah", "country": "Kuwait", "gender": "female", "age": "40s", "description": "Middle Eastern woman, hijab, professional smile"},
    {"name": "Samuel Ochieng", "country": "Kenya", "gender": "male", "age": "35", "description": "East African man, medical patient, recovery expression"},
    {"name": "Maryam Jaber", "country": "Lebanon", "gender": "female", "age": "25", "description": "Middle Eastern young woman, modern style, confident"},
    {"name": "Kwame Asante", "country": "Ghana", "gender": "male", "age": "50s", "description": "West African man, traditional Kente pattern shirt, dignified"},
    {"name": "Aaliya Hassan", "country": "Pakistan", "gender": "female", "age": "50s", "description": "South Asian woman, modest attire, gentle expression"},
    {"name": "Fatou Sow", "country": "Senegal", "gender": "female", "age": "40s", "description": "West African woman, colorful headwrap, hopeful expression"},
    {"name": "Youssef El-Masry", "country": "Egypt", "gender": "male", "age": "40s", "description": "Middle Eastern man with young child, caring father"},
    {"name": "Halima Al-Zahra", "country": "Iraq", "gender": "female", "age": "30s", "description": "Middle Eastern woman, mother figure, protective expression"},
    {"name": "John Ouma", "country": "Uganda", "gender": "male", "age": "45", "description": "East African man, recovery patient, grateful expression"},
    {"name": "Amira Benali", "country": "Morocco", "gender": "female", "age": "35", "description": "North African woman, Berber features, strong expression"},
    {"name": "Tariq Al-Mansouri", "country": "Oman", "gender": "male", "age": "50s", "description": "Middle Eastern man, traditional dishdasha, wise look"},
    {"name": "Esther Mwangi", "country": "Kenya", "gender": "female", "age": "30s", "description": "East African woman, mother, joyful expression"},
    {"name": "Rashid Al-Maktoum", "country": "UAE", "gender": "male", "age": "55", "description": "Middle Eastern man, business executive, serious expression"},
    {"name": "Fatima Kone", "country": "Ivory Coast", "gender": "female", "age": "25", "description": "West African young woman with baby, loving mother"},
    {"name": "Ali Al-Rashid", "country": "Jordan", "gender": "male", "age": "60s", "description": "Middle Eastern elderly man, medical patient, hopeful"},
    {"name": "Grace Mensah", "country": "Ghana", "gender": "female", "age": "40s", "description": "West African woman, nurse-like appearance, caring"},
    {"name": "Mahmoud Farouk", "country": "Egypt", "gender": "male", "age": "65", "description": "Middle Eastern elderly man, heart patient, grateful"},
    {"name": "Aisha Osman", "country": "Sudan", "gender": "female", "age": "25", "description": "East African young woman with child, protective mother"},
    {"name": "Hassan Al-Dosari", "country": "Bahrain", "gender": "male", "age": "55", "description": "Middle Eastern man, businessman, confident recovery"},
    {"name": "Mariam Sesay", "country": "Sierra Leone", "gender": "female", "age": "30s", "description": "West African woman, pregnant patient, hopeful"},
    {"name": "Omar Belkadi", "country": "Algeria", "gender": "male", "age": "40s", "description": "North African man, Berber features, determined"},
    {"name": "Hadiya Al-Sabah", "country": "Kuwait", "gender": "female", "age": "30s", "description": "Middle Eastern woman, fertility patient, joyful"},
    {"name": "Joseph Ankrah", "country": "Ghana", "gender": "male", "age": "60s", "description": "West African elderly man, eye patient, clear vision"},
    {"name": "Nadia Al-Masri", "country": "Syria", "gender": "female", "age": "35", "description": "Middle Eastern woman, reconstruction patient, resilient"},
    {"name": "Emmanuel Nyong", "country": "Cameroon", "gender": "male", "age": "40s", "description": "Central African man with child, grateful father"},
    {"name": "Salma Al-Zahra", "country": "Yemen", "gender": "female", "age": "30s", "description": "Middle Eastern woman with child, protective mother"},
    {"name": "Kwaku Osei", "country": "Ghana", "gender": "male", "age": "45", "description": "West African man, spine patient, improved posture"},
    {"name": "Zineb Benali", "country": "Morocco", "gender": "female", "age": "40s", "description": "North African woman, cancer survivor, strong"},
    {"name": "Ahmed Al-Dosari", "country": "Qatar", "gender": "male", "age": "50s", "description": "Middle Eastern man, heart patient, healthy recovery"},
    {"name": "Fatima Keita", "country": "Mali", "gender": "female", "age": "65", "description": "West African elderly woman, cataract patient, clear vision"},
    {"name": "Ibrahim Okafor", "country": "Nigeria", "gender": "male", "age": "55", "description": "West African man, lung cancer survivor, healthy"},
    {"name": "Layla Al-Rashid", "country": "UAE", "gender": "female", "age": "30s", "description": "Middle Eastern woman, fertility success, mother"},
    {"name": "Moses Nkomo", "country": "Zimbabwe", "gender": "male", "age": "60s", "description": "Southern African man, heart patient, active recovery"},
    {"name": "Yasmin Al-Mansoori", "country": "Oman", "gender": "female", "age": "35", "description": "Middle Eastern woman, weight loss success, confident"},
    {"name": "Adama Traore", "country": "Burkina Faso", "gender": "male", "age": "40s", "description": "West African man with child, grateful father"},
    {"name": "Khalid Al-Sabah", "country": "Kuwait", "gender": "male", "age": "60s", "description": "Middle Eastern elderly man, cancer survivor, strong"},
    {"name": "Amina Diallo", "country": "Guinea", "gender": "female", "age": "25", "description": "West African young woman with baby, heart surgery success"},
    {"name": "Samir Belkacem", "country": "Algeria", "gender": "male", "age": "50s", "description": "North African man, knee replacement, active lifestyle"},
    {"name": "Hauwa Ibrahim", "country": "Nigeria", "gender": "female", "age": "40s", "description": "West African woman, kidney patient supporter, caring wife"},
    {"name": "Mahmoud Al-Dosari", "country": "Bahrain", "gender": "male", "age": "45", "description": "Middle Eastern man, corneal transplant, clear vision"}
]

def create_image_prompt(patient):
    """Create a detailed prompt for AI image generation"""
    base_prompt = f"Professional medical headshot portrait of a {patient['age']} year old {patient['description']}"
    
    style_prompt = ", high quality professional photography, medical website testimonial photo, clean background, soft lighting, trustworthy expression, facing camera, shoulders visible, realistic, photorealistic, 4K resolution"
    
    return base_prompt + style_prompt

def generate_filename(name):
    """Generate filename from patient name"""
    return name.lower().replace(' ', '-').replace("'", '').replace('.', '') + '.jpg'

def main():
    """Generate image creation instructions and save metadata"""
    
    # Create patients directory
    patients_dir = Path("images/patients")
    patients_dir.mkdir(parents=True, exist_ok=True)
    
    # Create metadata file for image generation
    metadata = []
    
    print("AI Image Generation Instructions for Patient Avatars")
    print("=" * 60)
    print("\nGenerate the following realistic patient portrait images using an AI image generator")
    print("(such as DALL-E, Midjourney, Stable Diffusion, or similar):\n")
    
    for i, patient in enumerate(patients, 1):
        filename = generate_filename(patient['name'])
        prompt = create_image_prompt(patient)
        
        metadata.append({
            'name': patient['name'],
            'filename': filename,
            'prompt': prompt,
            'country': patient['country'],
            'gender': patient['gender'],
            'age': patient['age']
        })
        
        print(f"{i:2d}. {patient['name']} ({patient['country']})")
        print(f"    Filename: {filename}")
        print(f"    Prompt: {prompt}")
        print()
    
    # Save metadata for reference
    with open('patient-avatar-generation-metadata.json', 'w') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"\nGenerated metadata for {len(patients)} patient avatars")
    print("Metadata saved to: patient-avatar-generation-metadata.json")
    print("\nNext steps:")
    print("1. Use the prompts above with your preferred AI image generator")
    print("2. Save each generated image with the specified filename in images/patients/")
    print("3. Ensure all images are in JPG format for web compatibility")
    print("4. Recommended image size: 300x300 pixels or larger")

if __name__ == "__main__":
    main()