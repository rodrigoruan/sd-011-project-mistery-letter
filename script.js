const styleClasses = ['newspaper', 'magazine1', 'magazine2'];
const sizeClasses = ['medium', 'big', 'reallybig'];
const rotationClasses = ['rotateleft', 'rotateright'];
const inclinationClasses = ['skewleft', 'skewright'];

const inputText = document.getElementById('carta-texto');
const buttonGenerate = document.getElementById('criar-carta');
const counter = document.getElementById('carta-contador');
const container = document.getElementById('carta-gerada');

const newSpanElement = document.createElement('span');

function isEmpty(string) {
  return string === '';
}

/*
  Code from MDN (Getting a random integer between two values)
  Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function assignRandomClasses(element) {
  element.classList.add(styleClasses[getRandomNumber(0, 2)]);
  element.classList.add(sizeClasses[getRandomNumber(0, 2)]);
  element.classList.add(rotationClasses[getRandomNumber(0, 1)]);
  element.classList.add(inclinationClasses[getRandomNumber(0, 1)]);
}

function createSpan(text) {
  const newSpan = newSpanElement.cloneNode();
  newSpan.innerText = text;
  assignRandomClasses(newSpan);

  return newSpan;
}

function updateCounter(length) {
  counter.innerText = length;
  if (counter.classList.length === 0) counter.classList.add('contador');
}

function createLetter() {
  container.innerHTML = '';
  const text = inputText.value.trim();

  if (!isEmpty(text)) {
    const words = text.split(' ');
    updateCounter(words.length);

    words.forEach((word) => container.appendChild(createSpan(word)));
  } else {
    counter.innerHTML = '';
    counter.classList.remove('contador');
    container.innerText = 'Por favor, digite o conteúdo da carta.';
  }

  inputText.focus();
}

function generateNewClasses({ target }) {
  if (target.tagName === 'SPAN') {
    target.classList.remove(...target.classList);
    assignRandomClasses(target);
  }
}

function onLoad() {
  inputText.focus();
  buttonGenerate.addEventListener('click', createLetter);
  container.addEventListener('click', generateNewClasses);
}

window.onload = onLoad;
