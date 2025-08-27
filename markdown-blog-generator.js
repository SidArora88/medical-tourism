// Markdown Blog Generator for Content Writers
// This script converts markdown blog files into full HTML blog pages

const fs = require('fs');
const path = require('path');

// Simple markdown parser for our blog structure
function parseMarkdown(content) {
    // Extract meta information from the top of the file
    const metaRegex = /- \*\*(.*?)\*\*:\s*(.*?)$/gm;
    const meta = {};
    let match;
    
    while ((match = metaRegex.exec(content)) !== null) {
        const key = match[1].toLowerCase().replace(/\s+/g, '');
        meta[key] = match[2].trim();
    }
    
    // Extract excerpt (first content after "## Blog Excerpt")
    const excerptMatch = content.match(/## Blog Excerpt\n\*\*(.*?)\*\*/s);
    const excerpt = excerptMatch ? excerptMatch[1].replace(/REPLACE:\s*/g, '').trim() : '';
    
    // Extract main content (everything after the meta section and excerpt)
    const contentStart = content.indexOf('# ') + content.indexOf('# ') > -1 ? content.indexOf('# ') : content.indexOf('## Introduction');
    const mainContent = content.substring(contentStart);
    
    // Extract statistics
    const statsRegex = /- \*\*(.*?)\*\* - (.*?)$/gm;
    const stats = [];
    let statsMatch;
    
    while ((statsMatch = statsRegex.exec(content)) !== null) {
        stats.push({
            number: statsMatch[1].trim(),
            description: statsMatch[2].trim()
        });
    }
    
    return {
        meta: {
            title: meta.title || '',
            description: meta.description || '',
            category: meta.category || '',
            date: meta.date || '',
            readTime: meta.readtime || meta['readtime'] || '',
            author: meta.author || '',
            tags: meta.tags ? meta.tags.split(',').map(t => t.trim()) : [],
            heroIcon: meta.heroicon || meta['heroicon'] || 'fas fa-heart',
            fileName: meta.filename || meta['filename'] || 'blog-new.html'
        },
        content: {
            excerpt: excerpt,
            mainContent: mainContent,
            stats: stats
        }
    };
}

// Convert markdown content to HTML
function markdownToHtml(markdown) {
    let html = markdown;
    
    // Convert headers
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    
    // Convert bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert images ![alt text](image path)
    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<div class="doctor-image-container"><img src="$2" alt="$1" class="doctor-image" /></div>');
    
    // Convert lists
    html = html.replace(/^- (.*$)/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
    
    // Fix multiple ul tags
    html = html.replace(/<\/ul>\s*<ul>/g, '');
    
    // Convert paragraphs (lines that aren't headers, lists, or empty)
    const lines = html.split('\n');
    const processedLines = [];
    let inList = false;
    
    for (let line of lines) {
        line = line.trim();
        if (!line) {
            processedLines.push('');
            continue;
        }
        
        if (line.includes('<h1>') || line.includes('<h2>') || line.includes('<h3>')) {
            processedLines.push(line);
        } else if (line.includes('<ul>') || line.includes('</ul>')) {
            processedLines.push(line);
            inList = line.includes('<ul>');
        } else if (line.includes('<li>')) {
            processedLines.push(line);
        } else if (line.includes('**Specialty**:')) {
            // Hospital specialty lines
            processedLines.push(`<p>${line}</p>`);
        } else if (line.startsWith('|') || line.includes('---')) {
            // Table content - handle separately
            processedLines.push(line);
        } else if (!inList && line.length > 0) {
            processedLines.push(`<p>${line}</p>`);
        }
    }
    
    html = processedLines.join('\n');
    
    // Convert tables
    html = convertMarkdownTable(html);
    
    // Convert hospital sections
    html = convertHospitalSections(html);
    
    // Clean up extra whitespace
    html = html.replace(/\n\s*\n/g, '\n\n');
    
    return html;
}

// Convert markdown tables to HTML
function convertMarkdownTable(html) {
    const tableRegex = /\|.*\|\n\|[\s\-\|]+\|\n(\|.*\|\n?)+/g;
    
    return html.replace(tableRegex, (match) => {
        const lines = match.trim().split('\n');
        const headers = lines[0].split('|').map(h => h.trim()).filter(h => h);
        const rows = lines.slice(2).map(row => 
            row.split('|').map(cell => cell.trim()).filter(cell => cell)
        );
        
        let tableHtml = '<div class="cost-table">\n<table>\n';
        tableHtml += '<thead><tr>';
        headers.forEach(header => {
            tableHtml += `<th>${header}</th>`;
        });
        tableHtml += '</tr></thead>\n<tbody>\n';
        
        rows.forEach(row => {
            tableHtml += '<tr>';
            row.forEach((cell, index) => {
                if (index === 0) {
                    tableHtml += `<td><strong>${cell}</strong></td>`;
                } else {
                    tableHtml += `<td>${cell}</td>`;
                }
            });
            tableHtml += '</tr>\n';
        });
        
        tableHtml += '</tbody>\n</table>\n</div>';
        return tableHtml;
    });
}

// Convert hospital sections to HTML cards
function convertHospitalSections(html) {
    // Look for hospital pattern: ### Hospital Name followed by **Specialty**: and bullet points
    const hospitalRegex = /### (.*?)\n<p>\*\*Specialty\*\*: (.*?)<\/p>\n<ul>(.*?)<\/ul>/gs;
    
    return html.replace(hospitalRegex, (match, name, specialty, features) => {
        return `<div class="hospital-card">
<h4>${name}</h4>
<p>${specialty}</p>
<ul>${features}</ul>
</div>`;
    });
}

// Blog HTML template
const blogTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | MediTravel</title>
    <meta name="description" content="{{DESCRIPTION}}">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        /* Include all the CSS from existing blog pages */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #1e293b;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .header {
            background: #ffffff;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
        }

        .navbar {
            padding: 1rem 0;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-logo h1 {
            color: #2563eb;
            font-size: 1.75rem;
            margin: 0;
        }

        .nav-logo h1 a {
            text-decoration: none;
            color: inherit;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
            margin: 0;
        }

        .nav-link {
            text-decoration: none;
            color: #1e293b;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .nav-link:hover {
            color: #2563eb;
        }

        .nav-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .btn-secondary, .btn-primary {
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 500;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            cursor: pointer;
            border: 2px solid transparent;
            font-size: 14px;
        }

        .btn-secondary {
            background: #f8fafc;
            color: #1e293b;
            border: 2px solid #e2e8f0;
        }

        .btn-primary {
            background: #2563eb;
            color: white;
        }

        .btn-primary:hover {
            background: #1d4ed8;
        }

        .article-header {
            padding: 120px 0 80px;
            background: {{HEADER_GRADIENT}};
            margin-top: 70px;
        }

        .article-meta {
            display: flex;
            gap: 2rem;
            margin-bottom: 2rem;
            font-size: 0.875rem;
            color: #64748b;
            justify-content: center;
        }

        .article-meta span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .article-title {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            color: #1e293b;
            text-align: center;
        }

        .article-excerpt {
            font-size: 1.25rem;
            color: #64748b;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .article-content {
            padding: 80px 0;
            background: #ffffff;
        }

        .article-body {
            max-width: 800px;
            margin: 0 auto;
            font-size: 1.1rem;
            line-height: 1.8;
        }

        .article-body h1 {
            font-size: 2.5rem;
            margin: 3rem 0 1.5rem;
            color: #1e293b;
        }

        .article-body h2 {
            font-size: 2rem;
            margin: 3rem 0 1.5rem;
            color: #1e293b;
        }

        .article-body h3 {
            font-size: 1.5rem;
            margin: 2.5rem 0 1rem;
            color: #1e293b;
        }

        .article-body p {
            margin-bottom: 1.5rem;
            color: #374151;
        }

        .article-body ul, .article-body ol {
            margin: 1.5rem 0;
            padding-left: 2rem;
        }

        .article-body li {
            margin-bottom: 0.5rem;
            color: #374151;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .stat-card {
            background: #f8fafc;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
        }

        .stat-card h4 {
            font-size: 2rem;
            color: #22c55e;
            margin-bottom: 0.5rem;
        }

        .stat-card p {
            color: #64748b;
            margin: 0;
        }

        .cost-table {
            background: #f8fafc;
            border-radius: 8px;
            overflow: hidden;
            margin: 2rem 0;
        }

        .cost-table table {
            width: 100%;
            border-collapse: collapse;
        }

        .cost-table th {
            background: #22c55e;
            color: white;
            padding: 1rem;
            text-align: left;
        }

        .cost-table td {
            padding: 1rem;
            border-bottom: 1px solid #e2e8f0;
        }

        .cost-table tr:last-child td {
            border-bottom: none;
        }

        .hospital-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .hospital-card {
            background: #f8fafc;
            padding: 2rem;
            border-radius: 8px;
            border-left: 4px solid #22c55e;
        }

        .hospital-card h4 {
            color: #1e293b;
            margin-bottom: 1rem;
        }

        .back-to-blog {
            background: #f8fafc;
            padding: 40px 0;
            text-align: center;
        }

        .back-to-blog a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
        }

        .back-to-blog a:hover {
            color: #1d4ed8;
        }

        .footer {
            background: #1e293b;
            color: white;
            padding: 4rem 0 2rem;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h3,
        .footer-section h4 {
            margin-bottom: 1rem;
            color: white;
        }

        .footer-section p {
            color: #94a3b8;
            font-size: 0.9rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 0.5rem;
        }

        .footer-section ul li a {
            color: #94a3b8;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .footer-section ul li a:hover {
            color: white;
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        .social-links a {
            width: 40px;
            height: 40px;
            background: #2563eb;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
        }

        .footer-bottom {
            border-top: 1px solid #374151;
            padding-top: 2rem;
            text-align: center;
            color: #94a3b8;
        }

        /* Doctor Image Styles */
        .doctor-image-container {
            float: left;
            margin: 0 2rem 1rem 0;
            text-align: center;
        }

        .doctor-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #22c55e;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }

        @media (max-width: 768px) {
            .doctor-image-container {
                float: none;
                margin: 1rem auto;
                display: block;
            }
            
            .doctor-image {
                width: 120px;
                height: 120px;
            }
        }

        @media (max-width: 968px) {
            .nav-menu {
                display: none;
            }
            .nav-actions {
                display: none;
            }
            .article-title {
                font-size: 2rem;
            }
            .article-meta {
                flex-direction: column;
                gap: 1rem;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <h1><a href="index.html">MediTravel</a></h1>
                </div>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#destinations" class="nav-link">Destinations</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#services" class="nav-link">Services</a>
                    </li>
                    <li class="nav-item">
                        <a href="blog-fixed.html" class="nav-link">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#testimonials" class="nav-link">Testimonials</a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#contact" class="nav-link">Contact</a>
                    </li>
                </ul>
                <div class="nav-actions">
                    <button class="btn-secondary" onclick="window.location.href='index.html#contact'">Consult Online</button>
                    <button class="btn-primary" onclick="window.location.href='index.html#contact'">Get Free Quote</button>
                </div>
            </div>
        </nav>
    </header>

    <section class="article-header">
        <div class="container">
            <div class="article-meta">
                <span>
                    <i class="fas fa-calendar"></i>
                    {{DATE}}
                </span>
                <span>
                    <i class="fas fa-clock"></i>
                    {{READ_TIME}}
                </span>
                <span>
                    <i class="fas fa-tag"></i>
                    {{CATEGORY}}
                </span>
            </div>
            <h1 class="article-title">{{TITLE}}</h1>
            <p class="article-excerpt">{{EXCERPT}}</p>
        </div>
    </section>

    <section class="article-content">
        <div class="container">
            <div class="article-body">
                {{CONTENT_BODY}}
                
                {{STATS_SECTION}}
            </div>
        </div>
    </section>

    <section class="back-to-blog">
        <div class="container">
            <a href="blog-fixed.html">
                <i class="fas fa-arrow-left"></i>
                Back to Blog
            </a>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>MediTravel</h3>
                    <p>Your trusted partner for safe, affordable, and high-quality medical care worldwide.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="index.html#services">Medical Consultation</a></li>
                        <li><a href="index.html#services">Treatment Planning</a></li>
                        <li><a href="index.html#services">Travel Coordination</a></li>
                        <li><a href="index.html#services">Post-Care Support</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Destinations</h4>
                    <ul>
                        <li><a href="index.html#destinations">India</a></li>
                        <li><a href="index.html#destinations">Turkey</a></li>
                        <li><a href="index.html#destinations">Thailand</a></li>
                        <li><a href="index.html#destinations">UAE</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="blog-fixed.html">Blog</a></li>
                        <li><a href="index.html#contact">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 MediTravel. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`;

// Function to generate HTML from Markdown
function generateBlogFromMarkdown(markdownFilePath) {
    try {
        // Read the markdown file
        const markdownContent = fs.readFileSync(markdownFilePath, 'utf8');
        const blogData = parseMarkdown(markdownContent);
        
        // Get gradient based on category
        const gradients = {
            'Heart Treatments': 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
            'Orthopedic Treatments': 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
            'Oncology Treatments': 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)',
            'Dental Treatments': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            'Cosmetic Treatments': 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)'
        };
        
        // Start with the template
        let html = blogTemplate;
        
        // Replace basic placeholders
        html = html.replace(/{{TITLE}}/g, blogData.meta.title);
        html = html.replace(/{{DESCRIPTION}}/g, blogData.meta.description);
        html = html.replace(/{{DATE}}/g, blogData.meta.date);
        html = html.replace(/{{READ_TIME}}/g, blogData.meta.readTime);
        html = html.replace(/{{CATEGORY}}/g, blogData.meta.category);
        html = html.replace(/{{EXCERPT}}/g, blogData.content.excerpt);
        html = html.replace(/{{HEADER_GRADIENT}}/g, gradients[blogData.meta.category] || gradients['Heart Treatments']);
        
        // Convert markdown content to HTML
        const contentHtml = markdownToHtml(blogData.content.mainContent);
        
        // Wrap hospital cards in grid if they exist
        let finalContent = contentHtml;
        if (finalContent.includes('<div class="hospital-card">')) {
            finalContent = finalContent.replace(/(<div class="hospital-card">.*?<\/div>)/gs, (match) => {
                // If not already wrapped, wrap all consecutive hospital cards
                if (!match.includes('hospital-grid')) {
                    const cards = match.match(/<div class="hospital-card">.*?<\/div>/gs);
                    if (cards && cards.length > 0) {
                        return `<div class="hospital-grid">\n${cards.join('\n')}\n</div>`;
                    }
                }
                return match;
            });
        }
        
        // Generate stats section
        let statsSection = '';
        if (blogData.content.stats && blogData.content.stats.length > 0) {
            statsSection = '<div class="stats-grid">\n';
            blogData.content.stats.forEach(stat => {
                statsSection += '<div class="stat-card">\n';
                statsSection += `<h4>${stat.number}</h4>\n`;
                statsSection += `<p>${stat.description}</p>\n`;
                statsSection += '</div>\n';
            });
            statsSection += '</div>\n';
        }
        
        // Replace content placeholders
        html = html.replace('{{CONTENT_BODY}}', finalContent);
        html = html.replace('{{STATS_SECTION}}', statsSection);
        
        // Write the generated HTML file
        const outputPath = blogData.meta.fileName;
        fs.writeFileSync(outputPath, html);
        
        console.log(`✅ Blog generated successfully from markdown: ${outputPath}`);
        
        // Return blog data for listing update
        return {
            fileName: blogData.meta.fileName,
            title: blogData.meta.title,
            excerpt: blogData.content.excerpt,
            category: blogData.meta.category,
            date: blogData.meta.date,
            readTime: blogData.meta.readTime,
            tags: blogData.meta.tags,
            heroIcon: blogData.meta.heroIcon
        };
        
    } catch (error) {
        console.error('❌ Error generating blog from markdown:', error.message);
        return null;
    }
}

// Command line usage
if (require.main === module) {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.log('Usage: node markdown-blog-generator.js <markdown-file-path>');
        console.log('Example: node markdown-blog-generator.js blog-content/example-blog.md');
        process.exit(1);
    }
    
    const markdownFilePath = args[0];
    if (!fs.existsSync(markdownFilePath)) {
        console.error(`❌ File not found: ${markdownFilePath}`);
        process.exit(1);
    }
    
    const blogData = generateBlogFromMarkdown(markdownFilePath);
    if (blogData) {
        console.log('📝 Blog metadata for listing:', blogData);
    }
}

module.exports = { generateBlogFromMarkdown };