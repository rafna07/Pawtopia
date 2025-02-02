// forum-script.js
document.addEventListener('DOMContentLoaded', function() {
    // Category selection
    const categories = document.querySelectorAll('.categories li');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            categories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });