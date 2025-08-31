#!/bin/bash

# AfiyaIndia.com SEO Automation Runner
echo "🚀 AfiyaIndia.com SEO Automation Starting..."

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed."
    exit 1
fi

# Install required packages
echo "📦 Installing required packages..."
pip3 install -r requirements.txt

# Run the SEO automation script
echo "🤖 Running SEO automation..."
python3 automate-seo.py

# Check if results file was created
if [ -f "seo_automation_results.json" ]; then
    echo "✅ SEO automation completed successfully!"
    echo "📄 Results saved to: seo_automation_results.json"
    echo ""
    echo "📋 Summary of generated content:"
    echo "  • Sitemap submitted to search engines"
    echo "  • Social media posts generated" 
    echo "  • Directory submission list created"
    echo "  • Outreach tracking system set up"
    echo ""
    echo "🎯 Next Actions Required:"
    echo "  1. Review seo_automation_results.json file"
    echo "  2. Post social media content from templates"
    echo "  3. Submit to directories listed in results"
    echo "  4. Send outreach emails using provided templates"
else
    echo "❌ SEO automation failed - no results file generated"
    exit 1
fi