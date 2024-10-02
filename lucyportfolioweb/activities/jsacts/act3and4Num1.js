const textElement = document.getElementById('text');
let fontSize = 10; 
let growing = true; 

const interval = setInterval(() => {
    if (growing) {
        fontSize += 1; 
        textElement.style.fontSize = `${fontSize}pt`;

        if (fontSize >= 50) {
            growing = false; 
            textElement.textContent = 'TEXT-SHRINKING'; 
            textElement.style.color = 'blue'; 
        }
    } else {
        fontSize -= 1; 
        textElement.style.fontSize = `${fontSize}pt`;

        if (fontSize <= 5) {
            clearInterval(interval); 
        }
    }
}, 100); 