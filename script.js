// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const body = document.body;

function toggleMenu() {
    const isActive = navMenu.classList.contains('active');
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    body.style.overflow = !isActive ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);

// Close menu when clicking on overlay
menuOverlay.addEventListener('click', toggleMenu);

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.style.overflow = '';
    });
});

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


// Book Appointment Button Handler
const whatsappNumber = '447525710574'; // Your WhatsApp number (no + or spaces)
const bookingMessage = 'hi can i speak to you about booking an appointment';

document.querySelectorAll('.book-appointment').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`;
        window.open(whatsappURL, '_blank');
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Scroll animations for images and cards
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay for staggered animation
            setTimeout(() => {
                entry.target.classList.add('animated');
                
                // Animate images inside
                const images = entry.target.querySelectorAll('img');
                images.forEach((img, imgIndex) => {
                    setTimeout(() => {
                        img.classList.add('animated');
                    }, imgIndex * 100);
                });
            }, index * 100);
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
});

// Observe other elements that need animation
document.querySelectorAll('.service-image img').forEach(img => {
    // Images will be animated when their parent card is animated
});

// Animate about section features
document.querySelectorAll('.feature').forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    
    const featureObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                featureObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    featureObserver.observe(feature);
});

