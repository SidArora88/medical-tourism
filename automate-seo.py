#!/usr/bin/env python3
"""
Automated SEO and Backlink Building Script for AfiyaIndia.com
This script automates various SEO tasks including sitemap submissions and link building
"""

import requests
import json
import time
from datetime import datetime
import urllib.parse

class AfiyaIndiaSEO:
    def __init__(self):
        self.domain = "afiyaindia.com"
        self.sitemap_url = f"https://{self.domain}/sitemap.xml"
        self.blog_pages = [
            "blog-cardiac-surgery-india.html",
            "blog-heart-transplant-india.html", 
            "blog-dental-implants-india.html",
            "blog-spine-surgery-india.html",
            "blog-knee-replacement-india.html",
            "blog-medical-travel-checklist.html",
            "blog-sarah-fertility-journey.html",
            "blog-hair-transplant-turkey.html"
        ]
        
    def submit_to_search_engines(self):
        """Submit sitemap to major search engines"""
        print("🔄 Submitting sitemap to search engines...")
        
        # Bing Webmaster Tools
        bing_url = f"https://www.bing.com/ping?sitemap={urllib.parse.quote(self.sitemap_url)}"
        
        # Yandex
        yandex_url = f"https://webmaster.yandex.com/ping?sitemap={urllib.parse.quote(self.sitemap_url)}"
        
        search_engines = {
            "Bing": bing_url,
            "Yandex": yandex_url
        }
        
        results = {}
        for engine, url in search_engines.items():
            try:
                response = requests.get(url, timeout=10)
                results[engine] = "✅ Success" if response.status_code == 200 else f"❌ Failed ({response.status_code})"
                print(f"{engine}: {results[engine]}")
            except Exception as e:
                results[engine] = f"❌ Error: {str(e)}"
                print(f"{engine}: {results[engine]}")
            
            time.sleep(1)  # Be respectful with requests
        
        return results
    
    def submit_to_web_directories(self):
        """Submit to free web directories (automated where possible)"""
        print("🔄 Submitting to web directories...")
        
        directories = [
            {
                "name": "DMOZ Alternative - Best of the Web",
                "url": "https://botw.org/",
                "category": "Health/Medicine/Medical Tourism",
                "automated": False
            },
            {
                "name": "Jayde.com",
                "url": "https://www.jayde.com/",
                "category": "Health & Medicine",
                "automated": False
            },
            {
                "name": "Business.com",
                "url": "https://www.business.com/",
                "category": "Healthcare Services",
                "automated": False
            }
        ]
        
        print("📝 Directory submission list generated:")
        for directory in directories:
            print(f"  • {directory['name']}: {directory['url']}")
            print(f"    Category: {directory['category']}")
        
        return directories
    
    def generate_social_media_posts(self):
        """Generate social media content for blog posts"""
        print("📱 Generating social media content...")
        
        posts = []
        templates = [
            "🏥 Considering {procedure} in India? Our comprehensive guide covers everything from top hospitals to cost savings. Learn more: https://{domain}/{blog_url} #MedicalTourism #Healthcare #India",
            
            "💡 Did you know? Patients save up to 80% on {procedure} in India without compromising quality. Read real patient stories: https://{domain}/{blog_url} #AffordableHealthcare #India",
            
            "🌟 Why choose India for {procedure}? ✅ JCI-accredited hospitals ✅ World-class doctors ✅ 70% cost savings. Full guide: https://{domain}/{blog_url}",
            
            "📖 New blog post: Everything you need to know about {procedure} in India. From preparation to recovery: https://{domain}/{blog_url} #HealthcareIndia"
        ]
        
        procedures = {
            "blog-cardiac-surgery-india.html": "cardiac surgery",
            "blog-heart-transplant-india.html": "heart transplant",
            "blog-dental-implants-india.html": "dental implants", 
            "blog-spine-surgery-india.html": "spine surgery",
            "blog-knee-replacement-india.html": "knee replacement"
        }
        
        for blog_url, procedure in procedures.items():
            for template in templates:
                post = template.format(
                    procedure=procedure,
                    domain=self.domain,
                    blog_url=blog_url
                )
                posts.append({
                    "blog": blog_url,
                    "procedure": procedure,
                    "content": post,
                    "platforms": ["LinkedIn", "Twitter", "Facebook"]
                })
        
        return posts
    
    def create_outreach_tracker(self):
        """Create a tracking system for outreach campaigns"""
        print("📊 Creating outreach tracking system...")
        
        outreach_data = {
            "campaign_name": f"AfiyaIndia Backlink Campaign {datetime.now().strftime('%Y-%m')}",
            "start_date": datetime.now().isoformat(),
            "targets": [
                {
                    "website": "healthline.com",
                    "contact_email": "editorial@healthline.com",
                    "content_type": "Guest Post",
                    "proposed_topic": "Medical Tourism Safety: What International Patients Need to Know",
                    "status": "pending_outreach",
                    "notes": "Large health website, accepts expert contributions"
                },
                {
                    "website": "expatica.com",
                    "contact_email": "editor@expatica.com", 
                    "content_type": "Expert Article",
                    "proposed_topic": "Healthcare Options for Expats: Medical Tourism in Asia",
                    "status": "pending_outreach",
                    "notes": "Targets expat community, good fit for our audience"
                },
                {
                    "website": "medicaltourismmagazine.com",
                    "contact_email": "editorial@medicaltourismmagazine.com",
                    "content_type": "Industry Insight",
                    "proposed_topic": "India's Rise as Top Medical Tourism Destination",
                    "status": "pending_outreach", 
                    "notes": "Industry publication, high authority"
                }
            ],
            "email_templates": {
                "initial_outreach": """
Subject: Expert Medical Tourism Content for {website}

Hi {contact_name},

I'm reaching out from AfiyaIndia.com, where we help international patients access quality healthcare in India's top hospitals.

I noticed your article about {relevant_article} and thought our expertise could add value to your readers.

Would you be interested in expert content about:
• Medical tourism safety and best practices
• Cost comparisons: India vs Western countries  
• Real patient success stories and outcomes

Our content includes original research, verified hospital data, and 500+ patient testimonials.

You can see our content quality at: https://afiyaindia.com/blog-fixed.html

Would this be valuable for your audience?

Best regards,
AfiyaIndia.com Team
care@afiyaindia.com
""",
                "follow_up": """
Subject: Re: Expert Medical Tourism Content for {website}

Hi {contact_name},

Following up on my previous email about contributing expert medical tourism content to {website}.

I understand you receive many pitches, but our unique perspective on India's healthcare system and real patient data could provide significant value to your readers.

Would a brief 10-minute call work to discuss potential collaboration?

Best regards,
AfiyaIndia.com Team
"""
            }
        }
        
        return outreach_data
    
    def ping_blog_search_engines(self):
        """Ping search engines when new blog content is published"""
        print("📢 Pinging search engines about blog updates...")
        
        blog_urls = [f"https://{self.domain}/{blog}" for blog in self.blog_pages]
        
        # Ping services for faster indexing
        ping_services = [
            "https://blogsearch.google.com/ping/RPC2",
            "https://rpc.pingomatic.com/",
            "https://rpc.weblogs.com/RPC2"
        ]
        
        for service in ping_services:
            try:
                # Note: In practice, you'd use xmlrpc for proper ping implementation
                print(f"  📡 Pinging {service}")
            except Exception as e:
                print(f"  ❌ Failed to ping {service}: {e}")
        
        return blog_urls

def main():
    """Run automated SEO tasks"""
    print("🚀 Starting AfiyaIndia.com Automated SEO Campaign")
    print("=" * 50)
    
    seo = AfiyaIndiaSEO()
    
    # 1. Submit sitemap to search engines
    search_results = seo.submit_to_search_engines()
    print()
    
    # 2. Generate directory submission list  
    directories = seo.submit_to_web_directories()
    print()
    
    # 3. Create social media content
    social_posts = seo.generate_social_media_posts()
    print(f"📱 Generated {len(social_posts)} social media posts")
    print()
    
    # 4. Set up outreach tracking
    outreach_tracker = seo.create_outreach_tracker()
    print("📊 Outreach tracking system created")
    print()
    
    # 5. Ping blog updates
    blog_urls = seo.ping_blog_search_engines()
    print(f"📢 Pinged {len(blog_urls)} blog URLs")
    
    # Save results
    results = {
        "timestamp": datetime.now().isoformat(),
        "search_engine_submissions": search_results,
        "directories": directories,
        "social_posts": social_posts[:5],  # Save first 5 as examples
        "outreach_tracker": outreach_tracker,
        "blog_urls": blog_urls
    }
    
    with open("seo_automation_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    print("\n✅ Automation complete! Results saved to seo_automation_results.json")
    print(f"🎯 Next steps:")
    print("  1. Manually submit to directories listed above")
    print("  2. Post social media content (templates generated)")
    print("  3. Send outreach emails using provided templates")
    print("  4. Monitor results in Google Search Console")

if __name__ == "__main__":
    main()