const letterInput = document.querySelector('#carta-texto');
const letterBtn = document.querySelector('#criar-carta');
const letterFinalParagraph = document.querySelector('#carta-gerada');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function addClasses(span) {
  const randQuantity = Math.floor(Math.random() * 4);
  if (randQuantity >= 0) {
    const randNum1 = Math.floor(Math.random() * styleGroup.length);
    span.classList.add(styleGroup[randNum1]);
  }
  if (randQuantity >= 1) {
    const randNum2 = Math.floor(Math.random() * sizeGroup.length);
    span.classList.add(sizeGroup[randNum2]);
  }
  if (randQuantity >= 2) {
    const randNum3 = Math.floor(Math.random() * rotationGroup.length);
    span.classList.add(rotationGroup[randNum3]);
  }
  if (randQuantity === 3) {
    const randNum4 = Math.floor(Math.random() * inclinationGroup.length);
    span.classList.add(inclinationGroup[randNum4]);
  }
}

function splitString2(string) {
  const words = string.split(' ');
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    if (word.trim().length) {
      const spanWord = document.createElement('span');
      spanWord.innerText = word;
      addClasses(spanWord);
      letterFinalParagraph.appendChild(spanWord);
    }
  }
}

function splitString() {
  letterBtn.addEventListener('click', () => {
    const string = letterInput.value;
    if (!string || !string.trim().length) {
      alert('Por favor, digite o conteúdo da carta.');
    } else {
      letterFinalParagraph.innerHTML = '';
      splitString2(string);
    }
  });
}

splitString();
