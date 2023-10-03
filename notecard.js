document.addEventListener('DOMContentLoaded', function() {
    // ... (rest of your code)

    // Initialize views
    showGridView();
});

let currentCard = 1; // Start with the first card
let totalCards = 16; // Update this to the total number of cards in the slideshow view

function showGridView() {
    document.getElementById('gridView').style.display = 'grid';
    document.getElementById('slideshow-view').style.display = 'none';
}

function showSlideshow() {
    document.getElementById('gridView').style.display = 'none';
    document.getElementById('slideshow-view').style.display = 'block';
    showCard(currentCard); // Show the first card initially
}

function showCard(cardNumber) {
    // Hide all cards except the specified one
    document.querySelectorAll('.slideshow-view .card').forEach(card => {
        card.style.display = 'none';
    });
    document.getElementById('card' + cardNumber).style.display = 'block';

    // Enable/disable navigation buttons
    document.querySelector('.slideshow-view button:nth-child(2)').disabled = (cardNumber === 1);
    document.querySelector('.slideshow-view button:nth-child(3)').disabled = (cardNumber === totalCards);
}

function prevCard() {
    currentCard = Math.max(1, currentCard - 1); // Don't go below 1
    showCard(currentCard);
}

function nextCard() {
    currentCard = Math.min(totalCards, currentCard + 1); // Don't go above totalCards
    showCard(currentCard);
}
