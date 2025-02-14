const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

//const secretCode = ['Pichi','Picha','Peach', 'Peaches', 'Momo', 'Lichi', 'Pixhi', 'Oichi', 'Aishwarya', 'Momdi', 'Aisha', 'Miumiu', 'Mewmew', 'Kitty', 'Pichdi'; // Replace with your secret code
const secretCode = 'Pichi';
const nextPageUrl = 'main.html'; // Replace with the URL of the new page

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'Baby';
		window.location.href = nextPageUrl; // Redirect to new page
	} else {
		resultDiv.innerHTML = 'You are not my Pichi, whu yu beech? >.> This is not for you! Go away!';
	}
});
