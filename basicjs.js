// Get references to the button and hero content
const swapButton = document.getElementById('swapButton');
const heroContent = document.querySelector('.hero-content');

// Add click event listener to the button
swapButton.addEventListener('click', function() {
    // Toggle the 'swapped' class to trigger the swap animation
    heroContent.classList.togglex('swapped');
});
