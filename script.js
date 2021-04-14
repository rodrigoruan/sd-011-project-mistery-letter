const input = document.getElementById('carta-texto');
const botao = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
let span = document.createElement('span');
paragrafo.appendChild(span);

input.addEventListener('click', () => {
  if (input.value !== 0) {
    span = input.value.split(' ');
    for (let index = 1; index < span.length; index += 1) {
      paragrafo.innerHTML += span[index];
    }
  } else {
  paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
});