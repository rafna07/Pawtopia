document.addEventListener('DOMContentLoaded', function() {
    // Pet Filter Search
    const searchInput = document.getElementById('search');
    const filterType = document.getElementById('filter-type');
    const petList = document.getElementById('pet-list');

    // Sample pets data (you can replace this with actual data or fetch it from an API)
    const pets = [
        { name: 'Buddy', type: 'dog', breed: 'Labrador', image: 'images/popp.jpg' },
        { name: 'Mittens', type: 'cat', breed: 'Siamese', image: 'images/gdf.jpg' },
        { name: 'Charlie', type: 'dog', breed: 'Beagle', image: 'images/klm.jpg' },
        { name: 'Fluffy', type: 'cat', breed: 'Persian', image: 'images/cat.jpg' },
        { name: 'Goldie', type: 'other', breed: 'Rabbit', image: 'images/rabby.jpg' },
    ];

    // Function to display pets
    function displayPets(pets) {
        petList.innerHTML = '';
        pets.forEach(pet => {
            const petCard = document.createElement('div');
            petCard.classList.add('pet-card');

            petCard.innerHTML = `
                <img src="${pet.image}" alt="${pet.name}">
                <div class="pet-info">
                    <h3>${pet.name}</h3>
                    <p>Breed: ${pet.breed}</p>
                    <p>Type: ${pet.type}</p>
                    <a href="#" class="adopt-btn">Adopt Now</a>
                </div>
            `;
            petList.appendChild(petCard);
        });
    }

    // Initial display of all pets
    displayPets(pets);

    // Search function
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredPets = pets.filter(pet => 
            pet.name.toLowerCase().includes(query) || pet.breed.toLowerCase().includes(query)
        );
        displayPets(filteredPets);
    });

    // Filter function
    filterType.addEventListener('change', function() {
        const selectedType = filterType.value;
        const filteredPets = pets.filter(pet => selectedType === 'all' || pet.type === selectedType);
        displayPets(filteredPets);
    });
});