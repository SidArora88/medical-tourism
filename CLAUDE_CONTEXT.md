# Afiya India Website - Claude Code Context

## Project Overview
**Website Name**: Afiya India  
**Domain**: afiyaindia.com  
**Purpose**: Medical tourism facilitator connecting international patients (primarily African & Southeast Asian) with India's top private hospitals  
**Target Audience**: International patients seeking affordable, world-class medical treatments in India  

## Technical Architecture

### Repository & Deployment
- **Git Repository**: https://github.com/SidArora88/medical-tourism.git
- **Main Branch**: `main`
- **Hosting**: Netlify (auto-deploys from GitHub main branch)
- **Deployment Strategy**: 
  - Commit changes locally → Push to GitHub → Netlify auto-deploys
  - Deployment typically takes 1-3 minutes
  - Configuration file: `netlify.toml`

### File Structure
```
/Users/siddarora/Documents/TestProject/
├── index.html                           # Main homepage
├── blog-fixed.html                      # Main blog listing page
├── blog-top-private-hospitals-india.html # Featured hospital blog post
├── patient-reviews-light.html           # Patient testimonials page
├── styles.css                          # Main stylesheet
├── script.js                           # Main JavaScript
├── images/
│   └── hospitals/                       # Hospital images (image1.png - image15.png)
├── netlify.toml                         # Netlify deployment config
├── package.json                         # Node.js dependencies
├── run-seo-automation.sh               # SEO automation script
├── automate-seo.py                     # Python SEO script
└── requirements.txt                     # Python dependencies
```

## Website Features & Content

### Core Pages
1. **Homepage (index.html)**: 
   - Hero section with consultation form
   - Featured destinations (India #1, Turkey, Thailand, UAE)
   - Services overview
   - Patient testimonials
   - Contact forms (Formspree: https://formspree.io/f/xnnbjryd)

2. **Blog (blog-fixed.html)**:
   - Medical tourism articles
   - Hospital guides
   - Treatment information
   - Patient success stories
   - Featured: "Top 15 Private Hospitals in India" (latest addition)

3. **Patient Reviews (patient-reviews-light.html)**:
   - International patient testimonials
   - Success stories
   - Treatment experiences

### Key Content Focus
- **Primary Market**: India medical tourism
- **Secondary Markets**: Turkey, Thailand, UAE
- **Target Treatments**: Cardiac surgery, cancer treatment, orthopedics, cosmetic surgery, dental, fertility
- **Cost Savings**: Up to 80% compared to Western countries
- **Hospital Standards**: JCI-accredited, NABH-certified facilities

## SEO Strategy & Tools

### Automated SEO System
- **Script**: `./run-seo-automation.sh`
- **Purpose**: Automates blog indexing, social media content generation, directory submissions
- **Results File**: `seo_automation_results.json`
- **Search Engine Pings**: Google Blog Search, Pingomatic, Weblogs.com + 5 others

### SEO Implementation
- **Meta Tags**: Comprehensive OpenGraph, Twitter Cards, geo-targeting
- **Keywords**: Medical tourism India, cardiac surgery India, JCI hospitals India
- **Schema Markup**: MedicalOrganization, Service, WebSite structured data
- **Performance**: Optimized for 95%+ PageSpeed scores
- **Mobile**: Fully responsive design

### Content Strategy
- **Blog Focus**: Hospital guides, treatment information, patient stories
- **Geographic Targeting**: India (primary), Africa, Southeast Asia
- **Service Areas**: Nigeria, South Africa, Kenya, Ghana, Indonesia, Malaysia, Thailand, Philippines

## Design & UX Standards

### Visual Design
- **Color Scheme**: Primary blue (#2563eb), success green (#10b981), neutral grays
- **Typography**: Inter font family, optimized loading
- **Components**: Cards, tables, forms, testimonials
- **Hospital Listings**: Table-like layout with proper image aspect ratios (160x120px)

### User Experience
- **Forms**: Formspree integration for lead capture
- **Contact**: Phone +91 9220243707, Email care@afiyaindia.com
- **Navigation**: Fixed header, smooth scrolling, mobile hamburger menu
- **Performance**: Deferred loading, optimized images, critical CSS inline

## Content Management

### Blog Post Structure
- **Format**: Individual HTML files (blog-[topic].html)
- **Integration**: Added to blog-fixed.html as featured articles
- **Images**: Stored in /images/hospitals/ directory
- **Responsive**: Table-like layout for hospital information

### Hospital Information Format
```html
<div class="hospital-row">
    <div class="hospital-image-cell">
        <div class="hospital-image">
            <img src="images/hospitals/imageX.jpg" alt="Hospital Name">
        </div>
    </div>
    <div class="hospital-details">
        <div class="hospital-header">...</div>
        <div class="hospital-info-grid">
            <div class="info-label">Specialty:</div>
            <div class="info-value">Description</div>
            <!-- Key Features, Services -->
        </div>
    </div>
</div>
```

## Workflow for Changes

### Content Updates
1. **Edit** files locally in `/Users/siddarora/Documents/TestProject/`
2. **Test** changes by opening HTML files in browser
3. **Commit** changes: `git add . && git commit -m "description"`
4. **Deploy**: `git push origin main` (triggers Netlify deployment)
5. **SEO**: Run `./run-seo-automation.sh` for new content indexing

### Blog Posts
1. **Create** new blog post file: `blog-[topic].html`
2. **Add images** to `/images/` directory if needed
3. **Update** `blog-fixed.html` to include new post as featured article
4. **Commit and deploy** following standard workflow
5. **Run SEO automation** for indexing

## Contact & Business Information
- **Business Name**: Afiya India
- **Phone**: +91 9220243707
- **Email**: care@afiyaindia.com
- **Services**: Medical consultation, hospital selection, travel coordination, post-care support
- **Specialization**: Connecting African & Southeast Asian patients with Indian hospitals
- **Value Proposition**: 70-80% cost savings, JCI-accredited hospitals, comprehensive support

## Important Notes
- **Never commit** without explicit user request
- **Always run** `./run-seo-automation.sh` after creating new blog content
- **Verify deployment** by checking live website after git push
- **Mobile-first** approach for all design decisions
- **Performance optimization** is critical (target 95%+ PageSpeed)
- **Accessibility** considerations (alt tags, ARIA labels, semantic HTML)

---

**Last Updated**: August 31, 2024  
**Current Status**: Live production website with automated SEO and Netlify deployment