// Retrieve elements
const generateButton = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');

function createWord() {
  const documentInput = document.getElementById('carta-texto');
  const textInput = documentInput.value;
  const textArray = textInput.split(' ');
  for (let index = 0; index < textArray.length; index += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerText = textArray[index];
    paragraph.appendChild(createSpan);
  }
}

function createEventListeners() {
  generateButton.addEventListener('click', createWord);
}

function init() {
  createEventListeners();
}

window.onload = init;
