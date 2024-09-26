document.getElementById('searchBar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let assetCards = document.querySelectorAll('.asset-card');

    assetCards.forEach(function(card) {
        let assetName = card.querySelector('h3').textContent.toLowerCase();
        if (assetName.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
