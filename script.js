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

document.addEventListener('DOMContentLoaded', function () {
    const codingBtn = document.getElementById('show-coding-timeline');

    const codingTimeline = document.getElementById('timeline-coding');


    function showTimeline(type) {
        if (type === 'coding') {
            codingBtn.classList.add('active');
            codingTimeline.classList.add('active');
        } else {
            codingBtn.classList.remove('active');
            codingTimeline.classList.remove('active');
        }
    }
 console.log(codingBtn)
    codingBtn.addEventListener('click', function () {
        showTimeline('coding');
    });
    // Default: show coding timeline
    showTimeline('coding');
});
