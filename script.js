const botao = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');

function DivideTexto() {
  const palavras = input.value.split(' ');
  return palavras;
}

botao.addEventListener('click', () => {
  const palavras = DivideTexto();
  const paragrafo = document.getElementById('carta-gerada');
  paragrafo.innerHTML = '';
  
  if (input.value === ' ' || input.value === '') {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < palavras.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = palavras[index];
      paragrafo.appendChild(span);
    }
  }
});
