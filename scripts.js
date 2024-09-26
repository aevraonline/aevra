document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const contentDiv = document.getElementById('content');
    
    // Attach event listeners to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get the page and direction attributes
            const page = this.getAttribute('data-page');
            const direction = this.getAttribute('data-direction');
            
            // Animate the current page out
            let currentPage = contentDiv.querySelector('.page-content');
            if (direction === 'left') {
                currentPage.style.animationName = 'slide-out-left';
            } else if (direction === 'right') {
                currentPage.style.animationName = 'slide-out-right';
            }

            // After the animation ends, load the new page content via AJAX
            setTimeout(() => {
                fetch(`${page}.html`)
                .then(response => response.text())
                .then(data => {
                    // Insert new content
                    contentDiv.innerHTML = data;
                    
                    // Animate the new page in
                    const newPage = contentDiv.querySelector('.page-content');
                    if (direction === 'left') {
                        newPage.style.animationName = 'slide-in-left';
                    } else if (direction === 'right') {
                        newPage.style.animationName = 'slide-in-right';
                    }
                });
            }, 600); // Delay matches the animation duration
        });
    });
});
