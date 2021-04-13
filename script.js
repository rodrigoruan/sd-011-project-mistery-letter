// Retrieve elements
const generateButton = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
const arrayOfClasses = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];


function checkForInput(value) {
  if (value === '' || value === ' ') {
    const createErrorElement = document.createElement('span');
    createErrorElement.innerText = 'Por favor, digite o conteúdo da carta.';
    paragraph.appendChild(createErrorElement);
  } else {
    return true;
  }  
}

function generateRandomClass (array) {
  const arrayInt = array;
  const randomNumber = Math.floor(Math.random() * arrayInt.length);
  const randomClass = arrayInt[randomNumber];
  return randomClass;
}

function removeAllContent() {
  for (let index = 0; index < paragraph.children.length;) {
    paragraph.removeChild(paragraph.lastElementChild);
  }
}

function changeWordStyle(event) {
  const newClassName = generateRandomClass(arrayOfClasses);
  event.target.className = '';
  event.target.classList.add(newClassName);
}

function updateSpan() {
  const spanTag = document.getElementsByTagName('span');
  for (let index = 0; index < spanTag.length; index += 1) {
    spanTag[index].addEventListener('click', changeWordStyle);
  }
  return spanTag;
}

function createWordCounter(value, inputValue) {
  const tagUpdate = value;
  const input = inputValue;
  if (input === '' || input === ' ') {
    return;
  } else {
    const counter = document.createElement('p');
    counter.id = 'carta-contador';
    counter.innerText = `${tagUpdate.length}`
    paragraph.appendChild(counter);
  }
}

function createWord() {
  const documentInput = document.getElementById('carta-texto');
  const textInput = documentInput.value;
  removeAllContent();
  if (checkForInput(textInput)) {
    const textArray = textInput.split(' ');
    for (let index = 0; index < textArray.length; index += 1) {
      const createSpan = document.createElement('span');
      const randomGeneratedClass = generateRandomClass(arrayOfClasses);
      createSpan.innerText = `${textArray[index]}`;
      createSpan.classList.add(randomGeneratedClass);
      paragraph.appendChild(createSpan);
    }
    const update = updateSpan();
    createWordCounter(update, textInput);
  }
}

function createEventListeners() {
  generateButton.addEventListener('click', createWord);  
}

function init() {
  createEventListeners();
}

window.onload = init;
