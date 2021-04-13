function clearLetter() {
  const wordList = document.querySelectorAll('.word');
  const paragraph = document.getElementById('carta-gerada');
  for (let index = 0; index < wordList.length; index += 1) {
    paragraph.removeChild(wordList[index]);
  }
}

function generateLetter() {
  const input = document.getElementById('carta-texto');
  console.log(input.value);
  const letter = input.value.split(' ');
  console.log(letter);
  clearLetter();
  const parent = document.getElementById('carta-gerada');
  if (letter[0] === '') {
    parent.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  for (let index = 0; index < letter.length; index += 1) {
    const element = document.createElement('span');
    element.innerText = letter[index];
    element.classList.add('word');
    parent.appendChild(element);
  }
}

function addEventGenerateLetter() {
  const button = document.getElementById('criar-carta');
  button.addEventListener('click', generateLetter);
}

window.onload = function load() {
  addEventGenerateLetter();
};
