function clearLetter() {
  const wordList = document.querySelectorAll('span');
  const paragraph = document.getElementById('carta-gerada');
  for (let index = 0; index < wordList.length; index += 1) {
    paragraph.removeChild(wordList[index]);
  }
}

function applyClases(element) {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotation = ['rotateleft', 'rotateright'];
  const inclination = ['skewleft', 'skewright'];
  let aux = Math.floor(Math.random() * style.length);
  element.classList.add(style[aux]);
  aux = Math.floor(Math.random() * size.length);
  element.classList.add(size[aux]);
  aux = Math.floor(Math.random() * rotation.length);
  element.classList.add(rotation[aux]);
  aux = Math.floor(Math.random() * inclination.length);
  element.classList.add(inclination[aux]);
}

function changeClases(event) {
  const word = event.target;
  word.className = '';
  applyClases(word);
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
    applyClases(element);
    element.addEventListener('click', changeClases);
    parent.appendChild(element);
  }
  document.getElementById('carta-contador').innerText = letter.length;
}

function addEventGenerateLetter() {
  const button = document.getElementById('criar-carta');
  button.addEventListener('click', generateLetter);
}

window.onload = function load() {
  addEventGenerateLetter();
};
