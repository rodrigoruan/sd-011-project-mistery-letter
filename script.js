const input = document.getElementById('carta-texto').value;
const botao = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');

botao.addEventListener('click', () => {
  if (input !== undefined) {
    let palavras = [];
    palavras.push(input.split(' '));
    let span = document.createElement('span');
    palavras = paragrafo.appendChild(span);
    for (let index = 0; index <= palavras.length; index += 1) {
      palavras[index] = span[index].value;
    }
  } else {
    paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
});
