// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Form validation and submission for both forms
function handleFormSubmission(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.phone || !data.treatment) {
            showMessage('Please fill in all required fields.', 'error', this);
            return;
        }
        
        // Email validation
        if (!isValidEmail(data.email)) {
            showMessage('Please enter a valid email address.', 'error', this);
            return;
        }
        
        // Phone validation
        if (!isValidPhone(data.phone)) {
            showMessage('Please enter a valid phone number.', 'error', this);
            return;
        }
        
        // Submit form to Formspree
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Submit form using fetch to Formspree
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showMessage('Thank you! We will contact you within 24 hours.', 'success', this);
                this.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            showMessage('An error occurred. Please try again.', 'error', this);
        })
        .finally(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
    });
}

// Apply form handling to both forms
const consultationForm = document.getElementById('consultationForm');
const heroConsultationForm = document.getElementById('heroConsultationForm');

if (consultationForm) {
    handleFormSubmission(consultationForm);
}

if (heroConsultationForm) {
    handleFormSubmission(heroConsultationForm);
}

// Formspree integration - no additional API configuration needed
// Forms now submit directly to Formspree endpoint

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

function showMessage(message, type, form = null) {
    // Remove existing messages for this form
    const targetForm = form || consultationForm;
    const existingMessage = targetForm.parentElement.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    
    // Style the message
    messageElement.style.cssText = `
        padding: 12px 16px;
        margin: 16px 0;
        border-radius: 8px;
        font-weight: 500;
        text-align: center;
        ${type === 'success' 
            ? 'background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0;' 
            : 'background: #fee2e2; color: #991b1b; border: 1px solid #fecaca;'
        }
    `;
    
    // Insert message after form
    targetForm.insertAdjacentElement('afterend', messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.remove();
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .destination-card, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
    });
});

// Statistics counter animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        const current = Math.floor(start + (target - start) * progress);
        element.textContent = current.toLocaleString() + '+';
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Animate counters when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const targetValue = parseInt(statNumber.textContent.replace(/[^\d]/g, ''));
            animateCounter(statNumber, targetValue);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => statsObserver.observe(stat));
});

// Button click effects
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary, .btn-secondary, .btn-outline')) {
        e.target.style.transform = 'scale(0.98)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Lazy loading for images (when added)
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

// Performance optimization: Throttle scroll events
let ticking = false;

function updateScrollEffects() {
    const scrollY = window.scrollY;
    
    // Header background effect
    const header = document.querySelector('.header');
    if (scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#ffffff';
        header.style.backdropFilter = 'none';
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Handle resize events
window.addEventListener('resize', () => {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth > 968) {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// Accessibility improvements
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// Add focus management for mobile menu
if (hamburger && navMenu) {
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click();
        }
    });
}

// Preload critical resources
document.addEventListener('DOMContentLoaded', () => {
    // Preload fonts if not already loaded
    if (!document.fonts.check('16px Inter')) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        link.as = 'style';
        document.head.appendChild(link);
    }
});

// Blog filtering functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');
    const loadMoreBtn = document.querySelector('.blog-load-more button');

    // Blog category filtering
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter blog cards
            blogCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'flex';
                    card.classList.remove('hidden');
                } else {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }
            });
            
            // Add animation
            setTimeout(() => {
                blogCards.forEach(card => {
                    if (!card.classList.contains('hidden')) {
                        card.style.animation = 'fadeInUp 0.6s ease-out';
                    }
                });
            }, 100);
        });
    });

    // Load more functionality (simulated)
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const hiddenCards = document.querySelectorAll('.blog-card.hidden');
            const cardsToShow = Array.from(hiddenCards).slice(0, 3);
            
            cardsToShow.forEach(card => {
                card.classList.remove('hidden');
                card.style.display = 'flex';
                card.style.animation = 'fadeInUp 0.6s ease-out';
            });
            
            // If no more hidden cards, hide load more button
            if (hiddenCards.length <= 3) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }

    // Blog card hover effects
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Enhanced form interaction
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
    field.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
        if (this.value) {
            this.parentElement.classList.add('filled');
        } else {
            this.parentElement.classList.remove('filled');
        }
    });
});

// Add CSS for form interactions
const formStyles = document.createElement('style');
formStyles.textContent = `
    .form-group.focused input,
    .form-group.focused select,
    .form-group.focused textarea {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
    
    .form-group.filled input,
    .form-group.filled select,
    .form-group.filled textarea {
        background: #f8fafc;
    }
`;
document.head.appendChild(formStyles);