const textElement = document.getElementById('text');
const increaseSizeButton = document.getElementById('increaseSize');
const changeColorButton = document.getElementById('changeColor');

let currentFontSize = 16; // Initial font size in pixels

// Function to increase font size
function increaseFontSize() {
    currentFontSize += 2; // Increase font size by 2px
    textElement.style.fontSize = currentFontSize + 'px'; // Apply new font size
}

// Function to change text color
function changeColor() {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'yellow', 'cyan']; // Array of colors
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Select random color
    textElement.style.color = randomColor; // Change text color
}

// Event listeners for buttons
increaseSizeButton.addEventListener('click', increaseFontSize);
changeColorButton.addEventListener('click', changeColor);
