// Intersection Observer for scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.hero *)');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
};

// Smooth scroll for navigation
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Trigger hero animations immediately
    document.querySelectorAll('.hero .animate-on-scroll').forEach(element => {
        element.classList.add('show');
    });

    // Initialize scroll animations for other sections
    animateOnScroll();
    smoothScroll();
});
