 // Initialize AOS
 AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Initialize Lightgallery
document.addEventListener('DOMContentLoaded', () => {
    lightGallery(document.querySelectorAll('.gallery-item'), {
        selector: 'this',
        download: false,
        counter: false,
        zoom: true,
        scale: 1
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
        mobileMenuBtn.innerHTML = mobileNav.classList.contains('hidden') ?
            '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-secondary/90');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-secondary/90');
        }
    });
}

// Typed.js initialization
if (document.getElementById('typed')) {
    const typed = new Typed('#typed', {
        strings: [
            "Coding is an art, not just syntax",
            "Coding with coffee hits different!",
            "Let’s build an awesome website together!"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        smartBackspace: true
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// WhatsApp Contact Form Submission 
// Contact Form Validation and Submission
if (document.getElementById('contactForm')) {
    const contactForm = document.getElementById('contactForm');
    
    // Form validation
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Reset error states
        resetErrors();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        let isValid = true;
        
        if (!name) {
            showError('name', 'Please enter your name');
            isValid = false;
        }
        
        if (!email) {
            showError('email', 'Please enter your email');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email');
            isValid = false;
        }
        
        if (!subject) {
            showError('subject', 'Please enter a subject');
            isValid = false;
        }
        
        if (!message) {
            showError('message', 'Please enter your message');
            isValid = false;
        }
        
        // If form is valid, submit it
        if (isValid) {
            submitForm(name, email, subject, message);
        }
    });
    
    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Helper function to show error messages
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(`${fieldId}-error`);
        
        field.classList.add('input-error');
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
    
    // Helper function to reset all error states
    function resetErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        const inputElements = document.querySelectorAll('input, textarea');
        
        errorElements.forEach(el => el.classList.add('hidden'));
        inputElements.forEach(el => el.classList.remove('input-error'));
    }
    
    // Function to handle form submission
    function submitForm(name, email, subject, message) {
        const whatsappNumber = '62895412630703';
        const fullMessage = `*${subject}*\n\nHalo Rifqi,\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappURL, '_blank');

        // Reset form
        contactForm.reset();

        // Show success message
        showCustomAlert('Message sent successfully! I will get back to you soon.');
    }
}
// Custom Alert Function
function showCustomAlert(message) {
    // Create alert element if not exists
    let alertEl = document.querySelector('.custom-alert');
    if (!alertEl) {
        alertEl = document.createElement('div');
        alertEl.className = 'custom-alert';
        alertEl.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <div class="message">${message}</div>
            <button class="close-btn">×</button>
        `;
        document.body.appendChild(alertEl);
        
        // Add close button event
        alertEl.querySelector('.close-btn').addEventListener('click', () => {
            alertEl.classList.remove('show');
            setTimeout(() => alertEl.remove(), 400);
        });
    } else {
        alertEl.querySelector('.message').textContent = message;
    }
    
    // Show alert
    setTimeout(() => alertEl.classList.add('show'), 10);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        alertEl.classList.remove('show');
        setTimeout(() => alertEl.remove(), 400);
    }, 5000);
}

// Add animation to skill icons on scroll
const skillIcons = document.querySelectorAll('.skill-icon');
if (skillIcons.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-wiggle');
            }
        });
    }, { threshold: 0.1 });

    skillIcons.forEach(icon => {
        observer.observe(icon);
    });
}

/* Tailwind Config */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0f172a',
                secondary: '#1e293b',
                accent: '#06b6d4',
                accent2: '#8b5cf6',
                dark: '#020617',
                light: '#f8fafc'
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'bounce-slow': 'bounce 2s infinite',
                'spin-slow': 'spin 8s linear infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                }
            }
        }
    }
}