const letterInput = document.querySelector('#carta-texto');
const letterBtn = document.querySelector('#criar-carta');
const letterFinalParagraph = document.querySelector('#carta-gerada');

function splitString() {
  letterBtn.addEventListener('click', () => {
    letterFinalParagraph.innerHTML = '';
    const words = letterInput.value.split(' ');
    for (let index = 0; index < words.length; index += 1) {
      const word = words[index];
      const spanWord = document.createElement('span');
      spanWord.innerText = word;
      letterFinalParagraph.appendChild(spanWord);
    }
  });
}

splitString();
