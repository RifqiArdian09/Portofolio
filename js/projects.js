// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    mobileMenuBtn.innerHTML = mobileNav.classList.contains('hidden') ?
        '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-secondary/90');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-secondary/90');
    }
});

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

// Add touch event for project cards
document.querySelectorAll('.project-item').forEach(card => {
    card.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
    }, false);
});

// Tailwind config
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