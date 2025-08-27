const fs = require('fs');
const path = require('path');

// Create realistic placeholder images using This Person Does Not Exist API-style approach
// This creates diverse, realistic human faces for our patient testimonials

const patients = [
    { name: "Ahmed Hassan", gender: "male", ethnicity: "middle-eastern", age: "50" },
    { name: "Fatima Al-Zahra", gender: "female", ethnicity: "middle-eastern", age: "40" },
    { name: "Mohammed Osei", gender: "male", ethnicity: "african", age: "35" },
    { name: "Zara Mbeki", gender: "female", ethnicity: "african", age: "45" },
    { name: "Omar Al-Rashid", gender: "male", ethnicity: "middle-eastern", age: "40" },
    { name: "Grace Okafor", gender: "female", ethnicity: "african", age: "30" },
    { name: "Hassan Al-Mansoori", gender: "male", ethnicity: "middle-eastern", age: "60" },
    { name: "Amina Traore", gender: "female", ethnicity: "african", age: "50" },
    { name: "David Mutua", gender: "male", ethnicity: "african", age: "40" },
    { name: "Leyla Ozturk", gender: "female", ethnicity: "middle-eastern", age: "30" },
    { name: "Ibrahim Diallo", gender: "male", ethnicity: "african", age: "70" },
    { name: "Noura Al-Sabah", gender: "female", ethnicity: "middle-eastern", age: "40" },
    { name: "Samuel Ochieng", gender: "male", ethnicity: "african", age: "35" },
    { name: "Maryam Jaber", gender: "female", ethnicity: "middle-eastern", age: "25" },
    { name: "Kwame Asante", gender: "male", ethnicity: "african", age: "50" },
    { name: "Aaliya Hassan", gender: "female", ethnicity: "south-asian", age: "50" },
    { name: "Fatou Sow", gender: "female", ethnicity: "african", age: "40" },
    { name: "Youssef El-Masry", gender: "male", ethnicity: "middle-eastern", age: "40" },
    { name: "Halima Al-Zahra", gender: "female", ethnicity: "middle-eastern", age: "30" },
    { name: "John Ouma", gender: "male", ethnicity: "african", age: "45" },
    { name: "Amira Benali", gender: "female", ethnicity: "middle-eastern", age: "35" },
    { name: "Tariq Al-Mansouri", gender: "male", ethnicity: "middle-eastern", age: "50" },
    { name: "Esther Mwangi", gender: "female", ethnicity: "african", age: "30" },
    { name: "Rashid Al-Maktoum", gender: "male", ethnicity: "middle-eastern", age: "55" },
    { name: "Fatima Kone", gender: "female", ethnicity: "african", age: "25" },
    { name: "Ali Al-Rashid", gender: "male", ethnicity: "middle-eastern", age: "60" },
    { name: "Grace Mensah", gender: "female", ethnicity: "african", age: "40" },
    { name: "Mahmoud Farouk", gender: "male", ethnicity: "middle-eastern", age: "65" },
    { name: "Aisha Osman", gender: "female", ethnicity: "african", age: "25" },
    { name: "Hassan Al-Dosari", gender: "male", ethnicity: "middle-eastern", age: "55" },
    { name: "Mariam Sesay", gender: "female", ethnicity: "african", age: "30" },
    { name: "Omar Belkadi", gender: "male", ethnicity: "middle-eastern", age: "40" },
    { name: "Hadiya Al-Sabah", gender: "female", ethnicity: "middle-eastern", age: "30" },
    { name: "Joseph Ankrah", gender: "male", ethnicity: "african", age: "60" },
    { name: "Nadia Al-Masri", gender: "female", ethnicity: "middle-eastern", age: "35" },
    { name: "Emmanuel Nyong", gender: "male", ethnicity: "african", age: "40" },
    { name: "Salma Al-Zahra", gender: "female", ethnicity: "middle-eastern", age: "30" },
    { name: "Kwaku Osei", gender: "male", ethnicity: "african", age: "45" },
    { name: "Zineb Benali", gender: "female", ethnicity: "middle-eastern", age: "40" },
    { name: "Ahmed Al-Dosari", gender: "male", ethnicity: "middle-eastern", age: "50" },
    { name: "Fatima Keita", gender: "female", ethnicity: "african", age: "65" },
    { name: "Ibrahim Okafor", gender: "male", ethnicity: "african", age: "55" },
    { name: "Layla Al-Rashid", gender: "female", ethnicity: "middle-eastern", age: "30" },
    { name: "Moses Nkomo", gender: "male", ethnicity: "african", age: "60" },
    { name: "Yasmin Al-Mansoori", gender: "female", ethnicity: "middle-eastern", age: "35" },
    { name: "Adama Traore", gender: "male", ethnicity: "african", age: "40" },
    { name: "Khalid Al-Sabah", gender: "male", ethnicity: "middle-eastern", age: "60" },
    { name: "Amina Diallo", gender: "female", ethnicity: "african", age: "25" },
    { name: "Samir Belkacem", gender: "male", ethnicity: "middle-eastern", age: "50" },
    { name: "Hauwa Ibrahim", gender: "female", ethnicity: "african", age: "40" },
    { name: "Mahmoud Al-Dosari", gender: "male", ethnicity: "middle-eastern", age: "45" }
];

function generateFilename(name) {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') + '.jpg';
}

function createRealisticAvatar(patient, index) {
    // Use a diverse set of realistic placeholder image services
    const services = {
        'middle-eastern': {
            male: [
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face'
            ],
            female: [
                'https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face'
            ]
        },
        'african': {
            male: [
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&crop=face'
            ],
            female: [
                'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop&crop=face'
            ]
        },
        'south-asian': {
            male: [
                'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face'
            ],
            female: [
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=300&h=300&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=300&h=300&fit=crop&crop=face'
            ]
        }
    };

    const ethnicityGroup = services[patient.ethnicity] || services['middle-eastern'];
    const genderGroup = ethnicityGroup[patient.gender] || ethnicityGroup.male;
    const imageUrl = genderGroup[index % genderGroup.length];
    
    return imageUrl;
}

// Update patient-reviews.js to use realistic placeholder URLs
function updatePatientReviewsJS() {
    const jsContent = `// Updated patient reviews with realistic placeholder images
function getPatientAvatarPath(name) {
    const patientImages = {
        ${patients.map((patient, index) => {
            const filename = generateFilename(patient.name);
            const imageUrl = createRealisticAvatar(patient, index);
            return `"${patient.name}": "${imageUrl}"`;
        }).join(',\n        ')}
    };
    
    return patientImages[name] || 'images/patients/default-avatar.svg';
}

// Helper functions for avatar generation
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function getGenderFromName(name) {
    const femaleNames = ['fatima', 'zara', 'grace', 'amina', 'leyla', 'noura', 'maryam', 'aaliya', 'fatou', 'halima', 'amira', 'esther', 'hadiya', 'nadia', 'salma', 'zineb', 'layla', 'yasmin', 'hauwa', 'mariam'];
    const firstName = name.split(' ')[0].toLowerCase();
    return femaleNames.includes(firstName) ? 'female' : 'male';
}

// Reviews functionality
let currentlyDisplayed = 6;
let filteredReviews = [...patientReviews];

function renderReviews(reviews, append = false) {
    const reviewsGrid = document.getElementById('reviewsGrid');
    const loadingState = document.getElementById('loadingState');
    
    if (!append) {
        reviewsGrid.innerHTML = '';
        currentlyDisplayed = 6;
        if (loadingState) {
            loadingState.style.display = 'none';
        }
    }
    
    const reviewsToShow = reviews.slice(0, currentlyDisplayed);
    
    reviewsToShow.forEach((review, index) => {
        if (append && index < currentlyDisplayed - 6) return;
        
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.setAttribute('data-category', review.category);
        
        reviewCard.innerHTML = \`
            <div class="review-header">
                <img src="\${getPatientAvatarPath(review.name)}" alt="\${review.name}" class="patient-avatar" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="patient-avatar-enhanced" data-country="\${review.country.toLowerCase()}" data-gender="\${getGenderFromName(review.name)}" style="display:none;">\${getInitials(review.name)}</div>
                <div class="patient-info">
                    <h4>\${review.name}</h4>
                    <div class="patient-location">\${review.flag} \${review.city}, \${review.country}</div>
                    <div class="treatment-badge">\${review.treatment}</div>
                </div>
            </div>
            
            <div class="review-rating">
                <div class="stars">
                    \${'★'.repeat(review.rating)}\${'☆'.repeat(5-review.rating)}
                </div>
                <span class="rating-text">\${review.rating}/5 stars</span>
            </div>
            
            <div class="review-content">
                <p class="review-text">"\${review.review}"</p>
                
                <div class="review-details">
                    <h5>Treatment Details</h5>
                    <div class="detail-item">
                        <span class="detail-label">Hospital:</span>
                        <span class="detail-value">\${review.hospital}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Doctor:</span>
                        <span class="detail-value">\${review.doctor}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Cost Saved:</span>
                        <span class="detail-value">\${review.cost_saved}</span>
                    </div>
                </div>
            </div>
            
            <div class="review-footer">
                <span class="hospital-name">\${review.hospital.split(',')[0]}</span>
                <span class="review-date">\${review.date}</span>
            </div>
        \`;
        
        reviewsGrid.appendChild(reviewCard);
    });
    
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    if (currentlyDisplayed >= reviews.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}`;

    return jsContent;
}

console.log("Creating realistic patient avatar system...");
console.log("Using high-quality Unsplash portraits for diverse representation");

// Generate the image mapping
patients.forEach((patient, index) => {
    const filename = generateFilename(patient.name);
    const imageUrl = createRealisticAvatar(patient, index);
    console.log(`${patient.name}: ${imageUrl}`);
});

console.log("\nRealistic avatar system created!");
console.log("These URLs point to high-quality, diverse portrait photos that will display immediately.");

module.exports = { updatePatientReviewsJS };