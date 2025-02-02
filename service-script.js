document.addEventListener('DOMContentLoaded', function() {
    // Search and Filter functionality
    const searchInput = document.getElementById('search');
    const serviceTypeSelect = document.getElementById('service-type');
    const serviceList = document.getElementById('service-list');

    // Sample data for services (replace this with real data or fetch from API)
    const services = [
        { name: 'Dr. Smith', type: 'veterinarian', description: 'Experienced vet with 10+ years in pet care.', image: 'images/dco.jpg' },
        { name: 'Paws Grooming', type: 'grooming', description: 'Full grooming service for dogs and cats.', image: 'images/abc.jpg' },
        { name: 'Dr. Jane', type: 'veterinarian', description: 'Specialist in pet surgery and emergency care.', image: 'images/dct.jpg' },
        { name: 'Pet Spa', type: 'grooming', description: 'Luxury grooming experience for your pets.', image: 'images/xyz.jpg' },
    ];

    // Function to display services
    function displayServices(services) {
        serviceList.innerHTML = ''; // Clear current list
        services.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.classList.add('service-card');

            serviceCard.innerHTML = `
                <img src="${service.image}" alt="${service.name}">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <a href="#" class="contact-btn">Contact</a>
            `;
            serviceList.appendChild(serviceCard);
        });
    }

    // Initial display of all services
    displayServices(services);

    // Search functionality
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredServices = services.filter(service => 
            service.name.toLowerCase().includes(query) || service.description.toLowerCase().includes(query)
        );
        displayServices(filteredServices);
    });

    // Filter functionality by type
    serviceTypeSelect.addEventListener('change', function() {
        const selectedType = serviceTypeSelect.value;
        const filteredServices = services.filter(service => selectedType === 'all' || service.type === selectedType);
        displayServices(filteredServices);
    });
});