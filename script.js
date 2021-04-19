const letterInput = document.getElementById('carta-texto');
const generateLetterButton = document.getElementById('criar-carta');
const outputLetter = document.getElementById('carta-gerada');

const cssClasses = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotate: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'],
};

/* 
  Explicação sobre esse algoritmo de sort: https://bost.ocks.org/mike/shuffle/
*/

function fisherYatesShuffle(array) {
  let backPileFrontier = array.length;
  let swap;
  let randomIndex;

  while (backPileFrontier) {
    randomIndex = Math.floor(Math.random() * backPileFrontier);
    backPileFrontier -= 1;

    swap = array[backPileFrontier];
    array[backPileFrontier] = array[randomIndex];
    array[randomIndex] = swap;
  }

  return array;
}

function getRandomBooleanArray(arrLen, minTrues) {
  const boolArray = [];
  const trues = Math.floor(Math.random() * (arrLen - minTrues + 1)) + minTrues;

  for (let i = 0; i < trues; i += 1) {
    boolArray.push(true);
  }

  for (let i = trues; i < arrLen; i += 1) {
    boolArray.push(false);
  }

  return fisherYatesShuffle(boolArray);
}

function getRandomClass(category) {
  if (!cssClasses[category]) {
    return '';
  }

  const draft = Math.floor(Math.random() * cssClasses[category].length);

  return cssClasses[category][draft];
}

function getRandomClassArray() {
  const cssClassesProps = Object.keys(cssClasses);
  const randomBooleanArray = getRandomBooleanArray(cssClassesProps.length, 2);
  const classArray = [];

  for (let i = 0; i < cssClassesProps.length; i += 1) {
    if (!randomBooleanArray[i]) {
      continue;
    }

    const category = cssClassesProps[i];
    classArray.push(getRandomClass(category));
  }

  return classArray;
}

generateLetterButton.addEventListener('click', (e) => {
  e.preventDefault();
  const currentInput = letterInput.value;
  if (!currentInput || !currentInput.replace(' ', '')) {
    return outputLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  outputLetter.innerHTML = '';
  const words = currentInput.split(' ');

  for (let i = 0; i < words.length; i += 1) {
   const newScrap = document.createElement('span');
   newScrap.innerText = words[i];
   newScrap.className = getRandomClassArray().join(' ');
   newScrap.addEventListener('click', () => {
     newScrap.className = getRandomClassArray().join(' ');
   })

   outputLetter.appendChild(newScrap); 
  }
});
