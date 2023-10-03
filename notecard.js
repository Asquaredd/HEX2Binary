// Add event listener to the slider for toggling the view
document.getElementById("toggle-switch").addEventListener("change", toggleView);// Function to show grid view




function showGridView() {
    document.getElementById("gridView").style.display = "grid";
    document.getElementById("slideshow-view").style.display = "none";
}

// Function to show single view
// Function to show single view
function showSlideshow() {
    document.getElementById("gridView").style.display = "none";
    var slideshowView = document.getElementById("slideshow-view");
    slideshowView.style.display = "block";

    // Ensure that the first card is displayed initially
    var cards = slideshowView.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        if (i === 0) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}


// Function to toggle between grid view and single view using the slider
function toggleView() {
    var slider = document.getElementById("toggle-switch");
    if (slider.checked) {
        showSlideshow(); // Show single view
    } else {
        showGridView(); // Show grid view
    }
}

let currentCard = 1; // Start with the first card
let totalCards = 16; // Update this to the total number of cards in the slideshow view

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

