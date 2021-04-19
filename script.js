const letterInput = document.querySelector('#carta-texto');
const letterBtn = document.querySelector('#criar-carta');
const letterFinalParagraph = document.querySelector('#carta-gerada');

function splitString2(string) {
  const words = string.split(' ');
  for (let index = 0; index < words.length; index += 1) {
    const word = words[index];
    if (word.trim().length) {
      const spanWord = document.createElement('span');
      spanWord.innerText = word;
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
