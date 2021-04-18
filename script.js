const inputElement = document.getElementById('carta-texto');
const letterElement = document.getElementById('carta-gerada');
const createLetterButton = document.getElementById('criar-carta');

function createLetter() {
  const inputText = inputElement.value;
  if (inputText.trim() === '') {
    letterElement.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const letter = inputText.split(' ').map((word) => (`<span>${word}</span>`)).join(' ');
    letterElement.innerHTML = letter;
  }
}

createLetterButton.addEventListener('click', createLetter);
