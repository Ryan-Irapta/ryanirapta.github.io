document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('food-form');
    form.addEventListener('submit', event => {
        event.preventDefault();

        const foodName = document.getElementById('food-name').value.trim();
        const description = document.getElementById('description').value.trim();
        const imageUrl = document.getElementById('image-url').value.trim();
        const rank = document.getElementById('rank').value.trim();

        if (foodName && description && imageUrl && !isNaN(rank) && rank !== '') {
            addFoodCard(foodName, description, imageUrl, parseInt(rank));
            form.reset();
        } else {
            alert('Please fill in all fields correctly.');
        }
    });

    function addFoodCard(name, description, imageUrl, rank) {
        const contentSection = document.getElementById('content-section');
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.dataset.rank = rank;

        foodCard.innerHTML = `
            <div>
                <img src="${imageUrl}" alt="${name}">
                <strong>${name}</strong>
                <p>${description}</p>
            </div>
            <button class="delete-btn">Delete</button>
        `;

        const deleteBtn = foodCard.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            foodCard.remove();
        });

        const existingCards = Array.from(contentSection.children);
        const insertIndex = existingCards.findIndex(card => parseInt(card.dataset.rank) > rank);
        if (insertIndex === -1) {
            contentSection.appendChild(foodCard);
        } else {
            contentSection.insertBefore(foodCard, existingCards[insertIndex]);
        }
    }
});
