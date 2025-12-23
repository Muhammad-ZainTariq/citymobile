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

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

