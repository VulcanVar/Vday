const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCodes = ['Pichi','Picha','Peach', 'Peaches', 'Momo', 'Lichi', 'Pixhi', 'Oichi', 'Aishwarya', 'Momdi', 'Aisha', 'Miumiu', 'Mewmew', 'Kitty', 'Pichdi']; // Add more names
const nextPageUrl = 'main.html'; // Redirect page

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = codeInput.value.trim(); // Remove extra spaces

    // Convert input and secret codes to lowercase for case-insensitive matching
    if (secretCodes.some(name => name.toLowerCase() === userInput.toLowerCase())) {  
        resultDiv.innerHTML = 'Baby';
        setTimeout(() => {
            window.location.href = nextPageUrl; // Redirect after 1 second
        }, 1000);
    } else {
        resultDiv.innerHTML = 'You are not my Pichi, whu yu beech? >.> This is not for you! Go away!';
    }
});
