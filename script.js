// global variables
const input = document.getElementById('carta-texto');
const p = document.getElementById('carta-gerada');
const button = document.getElementById('criar-carta');

button.addEventListener('click', () => {
  const word = input.value.split(' ');
  for (let i = 0; i < word.length; i += 1) {
    const span = document.createElement('span');
    span.append(word[i]);
    p.appendChild(span);
  }
  input.value = '';
});

input.addEventListener('change', () => {
  if (p.childElementCount > 0) {
    while (p.firstChild) {
      p.removeChild(p.firstChild);
    }
  }
});
