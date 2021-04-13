const inputText = document.getElementById('carta-texto');
const buttonGenerate = document.getElementById('criar-carta');
const container = document.getElementById('carta-gerada');

const newSpanElement = document.createElement('span');

function isEmpty(string) {
  return string.trim() === '';
}

function createLetter() {
  container.innerHTML = '';
  const text = inputText.value;

  if (!isEmpty(text)) {
    const words = text.split(' ');

    words.forEach((word) => {
      const newSpan = newSpanElement.cloneNode();
      newSpan.innerText = word;
      container.appendChild(newSpan);
    });
  } else container.innerText = 'Por favor, digite o conteúdo da carta.';

  inputText.focus();
}

function onLoad() {
  inputText.focus();
  buttonGenerate.addEventListener('click', createLetter);
}

window.onload = onLoad;
