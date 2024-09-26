function transitionToPage(pageId) {
    const currentPage = document.querySelector('.page:not([style*="opacity: 0"])');
    const nextPage = document.getElementById(pageId);

    if (currentPage.id === pageId) return; // Prevent transition to the same page

    // Slide out current page
    currentPage.style.transform = 'translateX(-100%)'; // Slide out to the left
    currentPage.style.opacity = '0'; // Fade out

    // Prepare the next page
    nextPage.style.transform = 'translateX(100%)'; // Start off-screen to the right
    nextPage.style.opacity = '1'; // Fade in
    nextPage.style.display = 'block'; // Make it visible

    // Slide in next page after a short delay
    setTimeout(() => {
        nextPage.style.transform = 'translateX(0)'; // Slide in
    }, 10); // Small delay to allow display change to take effect

    // Hide current page after the transition
    setTimeout(() => {
        currentPage.style.display = 'none';
        currentPage.style.transform = 'translateX(0)'; // Reset position
    }, 500); // Match duration with CSS transition
}
