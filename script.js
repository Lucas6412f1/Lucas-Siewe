// script.js
// Add your custom JavaScript here!

// Example: Animate the header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 30) {
        header.style.boxShadow = '0 4px 24px rgba(46,160,67,0.13)';
        header.style.background = 'linear-gradient(90deg, #e6f4ea 80%, #fff 100%)';
    } else {
        header.style.boxShadow = '';
        header.style.background = 'linear-gradient(90deg, #e6f4ea 60%, #fff 100%)';
    }
});
