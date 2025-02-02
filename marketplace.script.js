document.addEventListener('DOMContentLoaded', function() {
    // Search and Filter functionality
    const searchInput = document.getElementById('search');
    const productTypeSelect = document.getElementById('product-type');
    const productList = document.getElementById('product-list');

    // Sample data for products (replace with real data or fetch from an API)
    const products = [
        { name: 'Pet Food - Chicken', type: 'food', description: 'Healthy chicken-based food for your pets.', price: '$10.99', image: 'images/pch.jpg' },
        { name: 'Dog Toy - Bone Shape', type: 'toys', description: 'Durable bone-shaped toy for your dog.', price: '$5.99', image: 'images/tbn.jpg' },
        { name: 'Cat Scratcher', type: 'accessories', description: 'Perfect for scratching and stretching.', price: '$15.99', image: 'images/csc.jpg' },
        { name: 'Pet Food - Salmon', type: 'food', description: 'Salmon-based food for healthy pets.', price: '$12.99', image: 'images/ptfs.jpg' },
        { name: 'Interactive Cat Toy', type: 'toys', description: 'Interactive toy to keep your cat engaged.', price: '$8.99', image: 'images/inc.jpg' },
        { name: 'Pet Collar', type: 'accessories', description: 'Stylish collar for your pet.', price: '$7.99', image: 'images/ptc.jpg' }
    ];

    // Function to display products
    function displayProducts(products) {
        productList.innerHTML = ''; // Clear current list
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <a href="#" class="buy-btn">Buy Now</a>
            `;
            productList.appendChild(productCard);
        });
    }

    // Initial display of all products
    displayProducts(products);

    // Search functionality
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts);
    });

    // Filter functionality by type
    productTypeSelect.addEventListener('change', function() {
        const selectedType = productTypeSelect.value;
        const filteredProducts = products.filter(product => selectedType === 'all' || product.type === selectedType);
        displayProducts(filteredProducts);
    });
});