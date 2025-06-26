// script.js
// Enhance your portfolio with subtle, modern interactivity!

// Animate the header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (!header) return;
    if (window.scrollY > 30) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for navbar links
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Animate project cards on hover (touch-friendly)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('touchstart', function() {
        this.classList.add('hovered');
    });
    card.addEventListener('touchend', function() {
        this.classList.remove('hovered');
    });
});
