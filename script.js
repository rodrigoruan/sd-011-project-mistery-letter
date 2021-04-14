function clearLetter() {
  const wordList = document.querySelectorAll('.word');
  const paragraph = document.getElementById('carta-gerada');
  for (let index = 0; index < wordList.length; index += 1) {
    paragraph.removeChild(wordList[index]);
  }
}

function applyClases(element) {
  const style = ['newspaper', 'magazine1', 'magazine2', 'word'];
  const size = ['medium', 'big', 'reallybig', 'word'];
  const rotation = ['rotateleft', 'rotateright', 'word'];
  const inclination = ['skewleft', 'skewright', 'word'];
  let aux = Math.floor(Math.random() * 4);
  element.classList.add(style[aux]);
  aux = Math.floor(Math.random() * 4);
  element.classList.add(size[aux]);
  aux = Math.floor(Math.random() * 3);
  element.classList.add(rotation[aux]);
  aux = Math.floor(Math.random() * 3);
  element.classList.add(inclination[aux]);
}

function generateLetter() {
  const input = document.getElementById('carta-texto');
  const letter = input.value.split(' ');
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
    applyClases(element);
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
