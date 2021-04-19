// global variables
const input = document.getElementById('carta-texto');
const p = document.getElementById('carta-gerada');
const button = document.getElementById('criar-carta');
const countLetter = document.getElementById('carta-contador');

button.addEventListener('click', () => {
  let count = 0;
  if (input.value.trim() === '') {
    const span = document.createElement('span');
    span.append('Por favor, digite o conteúdo da carta.');
    p.appendChild(span);
  } else {
    const splitedStr = input.value.split(' ');
    for (let i = 0; i < splitedStr.length; i += 1) {
      count += 1;
      const span = document.createElement('span');
      span.append(splitedStr[i]);
      p.appendChild(span);
    }
  }
  countLetter.innerHTML = count;
});

input.addEventListener('change', () => {
  if (p.childElementCount > 0) {
    while (p.firstChild) {
      p.removeChild(p.firstChild);
    }
  }
});
