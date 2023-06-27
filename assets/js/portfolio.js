// Filtering portfolio cards
document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('#navbarFilter .nav-link');
    const portfolioCards = document.querySelectorAll('#portfolio .card');

    // Add click event listener filter link
    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the filter value
            const filter = this.getAttribute('data-filter');

            // Set active 
            filterLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            this.classList.add('active');

            //console.log('Filter:' + filter);

            // Show/hide portfolio cards based on the selected filter
            portfolioCards.forEach(function (card) {
                const cardFilters = card.parentElement.classList;
                //console.log('Card Classlist: ' + card.classList);
                if (filter === 'all' || cardFilters.contains(filter)) {
                    card.parentElement.style.display = 'block';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    });
});

// Back to top

