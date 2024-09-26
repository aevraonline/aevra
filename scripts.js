document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Attach event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get the direction attribute (left or right)
            const direction = this.getAttribute('data-direction');
            const nextPage = this.getAttribute('href');
            const pageWrapper = document.getElementById('page-wrapper');
            
            // Set the animation based on direction
            if (direction === 'left') {
                pageWrapper.style.animationName = 'slide-left';
            } else if (direction === 'right') {
                pageWrapper.style.animationName = 'slide-right';
            }

            // Delay the redirection to let the animation play
            setTimeout(function() {
                window.location.href = nextPage;
            }, 600); // Matches animation duration
        });
    });
});
