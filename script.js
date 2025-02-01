document.addEventListener('DOMContentLoaded', function() {
    // Menu item click handler
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });

    function performSearch(query) {
        // Implement search functionality here
        console.log('Searching for:', query);
    }

    // Notification badge functionality
    let notificationCount = 0;
    const notificationButton = document.querySelector('.nav-links .fa-bell').parentElement;
    
    notificationButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Implement notification panel toggle
        console.log('Toggle notifications');
    });

    // Add smooth hover effect to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});