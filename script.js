// Load the initial page
loadPage('page1.html');

function loadPage(page) {
    const currentPage = document.getElementById('currentPage');

    // Slide out current page
    currentPage.style.transform = 'translateX(-100%)'; // Slide out to the left
    currentPage.style.opacity = '0'; // Fade out

    // Load new page after a short delay
    setTimeout(() => {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                currentPage.innerHTML = data; // Load new page content
                currentPage.style.transform = 'translateX(100%)'; // Start off-screen to the right
                currentPage.style.opacity = '1'; // Fade in
                currentPage.style.display = 'block'; // Make it visible

                // Slide in new page after a short delay
                setTimeout(() => {
                    currentPage.style.transform = 'translateX(0)'; // Slide in
                }, 10); // Small delay to allow display change to take effect
            });
    }, 500); // Match duration with CSS transition

    // Hide current page after the transition
    setTimeout(() => {
        currentPage.style.display = 'none';
    }, 500); // Match duration with CSS transition
}
