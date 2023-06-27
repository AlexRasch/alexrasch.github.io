document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('#navbarFilter .nav-link');
    const portfolioCards = document.querySelectorAll('#portfolio .card');
    const btnBackToTop = document.querySelectorAll('#btnBackToTop');
  
    filterLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const filter = this.getAttribute('data-filter');
  
        filterLinks.forEach(function (link) {
          link.classList.toggle('active', link === this);
        }, this);
  
        portfolioCards.forEach(function (card) {
          const cardFilters = card.parentElement.classList;
          card.parentElement.style.display = (filter === 'all' || cardFilters.contains(filter)) ? 'block' : 'none';
        });
      });
    });
  
    window.onscroll = debounce(handleScroll, 100);
  
    // ToDo
    btnBackToTop.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        document.documentElement.scrollTop = 0;
      });
    });
  });
  
  function handleScroll() {
    const btnBackToTop = document.getElementById('btnBackToTop');
    btnBackToTop.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? 'block' : 'none';
  }
  
  // Best thing since sliced bread
  function debounce(func, delay) {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    };
  }
  