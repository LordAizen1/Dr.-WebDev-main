document.addEventListener("DOMContentLoaded", function() {
    const sectionsToAnimate = document.querySelectorAll('.fade-in-from-below');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function animateSections() {
        sectionsToAnimate.forEach(section => {
            section.classList.add('active');
        });
    }

    // Check if the current page is the "Know More" page
    if (window.location.pathname.includes('know-more.html')) {
        animateSections();
    }
});
