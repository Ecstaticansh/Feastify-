document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-form input');
    const restaurantList = document.querySelector('.restaurant-list');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();
        filterRestaurants(query);
    });

    function filterRestaurants(query) {
        const restaurants = restaurantList.querySelectorAll('.restaurant');
        restaurants.forEach(function(restaurant) {
            const restaurantName = restaurant.querySelector('h3').textContent.toLowerCase();
            const restaurantCuisine = restaurant.querySelector('p').textContent.toLowerCase();
            if (restaurantName.includes(query) || restaurantCuisine.includes(query)) {
                restaurant.style.display = 'block';
            } else {
                restaurant.style.display = 'none';
            }
        });
    }
});

