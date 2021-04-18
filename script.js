const tagP = document.querySelector('#carta-gerada');
const botao = document.querySelector('#criar-carta');
const classes = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

botao.addEventListener('click', () => {
  const frase = document.querySelector('#carta-texto').value;
  const palavras = frase.split(' ');
  tagP.innerHTML = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[0] === '') {
      tagP.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      const aleatory = Math.floor(Math.random() * 10);
      const aleatory2 = Math.floor(Math.random() * 10);
      const makeSpan = document.createElement('span');
      tagP.appendChild(makeSpan);
      makeSpan.innerHTML = palavras[index];
      makeSpan.classList.add(classes[aleatory]);
      makeSpan.classList.add(classes[aleatory2]);
    }
  }
});
