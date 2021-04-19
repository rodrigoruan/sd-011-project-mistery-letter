const generatedLetter = document.getElementById('carta-gerada');
const buttonCreateLetter = document.getElementById('criar-carta');
const inputTextLetter = document.getElementById('carta-texto');

const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
const groupSize = ['medium', 'big', 'reallybig'];
const groupRotation = ['rotateleft', 'rotateright'];
const groupSlope = ['skewleft', 'skewright'];

buttonCreateLetter.innerText = 'Criar carta';

function randomNumber(highestIndex) {
  return Math.round(Math.random() * highestIndex);
}

function eraseLetter() {
  for (let index = generatedLetter.children.length - 1; index >= 0; index -= 1) {
    generatedLetter.removeChild(generatedLetter.childNodes[index]);
  }
}

function createLetter() {
  const arrayTextLetter = inputTextLetter.value.split(' ');

  if (generatedLetter.children.length > 0) {
    eraseLetter();
  }

  for (let index = 0; index < arrayTextLetter.length; index += 1) {
    const spanWord = document.createElement('span');
    spanWord.innerText = arrayTextLetter[index];
    spanWord.classList.add('word');
    spanWord.classList.add(groupSize[randomNumber(groupSize.length - 1)]);
    spanWord.classList.add(groupStyle[randomNumber(groupStyle.length - 1)]);
    spanWord.classList.add(groupRotation[randomNumber(groupRotation.length - 1)]);
    spanWord.classList.add(groupSlope[randomNumber(groupSlope.length - 1)]);
    generatedLetter.appendChild(spanWord);
  }
}

buttonCreateLetter.addEventListener('click', createLetter);
