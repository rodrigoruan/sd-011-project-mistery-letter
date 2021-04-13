const inputText = document.getElementById('carta-texto');
const buttonGenerate = document.getElementById('criar-carta');
const container = document.getElementById('carta-gerada');

const newSpanElement = document.createElement('span');

function createLetter() {
  container.innerHTML = '';
  const words = inputText.value.split(' ');

  words.forEach((word) => {
    const newSpan = newSpanElement.cloneNode();
    newSpan.innerText = word;
    container.appendChild(newSpan);
  });

  inputText.focus();
}

function onLoad() {
  inputText.focus();
  buttonGenerate.addEventListener('click', createLetter);
}

window.onload = onLoad;
