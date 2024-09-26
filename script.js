function transitionToPage(pageId) {
    const currentPage = document.querySelector('.page:not([style*="display: none"])');
    const nextPage = document.getElementById(pageId);

    currentPage.style.opacity = '0'; // Fade out current page

    setTimeout(() => {
        currentPage.style.display = 'none'; // Hide current page after fade out
        nextPage.style.display = 'block'; // Show next page
        setTimeout(() => {
            nextPage.style.opacity = '1'; // Fade in next page
        }, 10); // Small delay to allow display change to take effect
    }, 500); // Match duration with CSS transition
}
