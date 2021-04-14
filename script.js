
const input = document.getElementById('carta-texto');
let span = document.createElement('span');
span = input.value;
const botao = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');

function criarItensSpans() {
let arrayInput = span.split(' ');
for (let index = 0; index < arrayInput.length; index += 1) {
  if (span !== '') {
      span[index] = input.appendChild(document.createTextNode(span));
    } else {
      paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.'
    }
  }
}
botao.addEventListener('click', criarItensSpans)