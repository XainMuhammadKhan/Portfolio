document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isInView = (rect.top >= 0 && rect.top <= window.innerHeight - 50);
            
            if (isInView) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFade);
    window.addEventListener('resize', checkFade);

    // Check for fade elements on page load
    checkFade();
});
