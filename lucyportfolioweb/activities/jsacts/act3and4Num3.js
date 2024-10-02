const textElement = document.getElementById('text');
const fontFamilySelect = document.getElementById('fontFamily');
const fontSizeInput = document.getElementById('fontSize');
const colorInput = document.getElementById('colorSelect');

// Function to change font family
fontFamilySelect.addEventListener('change', () => {
    textElement.style.fontFamily = fontFamilySelect.value; // Update font family
});

// Function to change font size
fontSizeInput.addEventListener('input', () => {
    textElement.style.fontSize = fontSizeInput.value + 'px'; // Update font size
});

// Function to change text color
colorInput.addEventListener('input', () => {
    textElement.style.color = colorInput.value; // Update text color
});
