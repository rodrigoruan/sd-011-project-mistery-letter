function generateLetter() {
  const input = document.getElementById('carta-texto');
  console.log(input);
  const letter = input.value.split(' ');
  const parent = document.getElementById('carta-gerada');
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
