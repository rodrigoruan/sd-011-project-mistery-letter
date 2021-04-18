const tagP = document.querySelector('#carta-gerada');
const botao = document.querySelector('#criar-carta');
const classes = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft'];
classes.push('rotateright', 'skewleft', 'skewright');

function makeAleatoryNumber() {
  const number = Math.floor(Math.random() * 10);
  return number;
}

botao.addEventListener('click', () => {
  const frase = document.querySelector('#carta-texto').value;
  const palavras = frase.split(' ');
  tagP.innerHTML = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[0] === '') {
      tagP.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      const makeSpan = document.createElement('span');
      makeAleatoryNumber();
      tagP.appendChild(makeSpan);
      makeSpan.innerHTML = palavras[index];
      makeSpan.classList.add(classes[makeAleatoryNumber()]);
      makeSpan.classList.add(classes[makeAleatoryNumber()]);
    }
  }
});

tagP.addEventListener('click', (event) => {
  event.target.classList.remove('newspaper', 'magazine1', 'magazine2', 'medium', 'big');
  event.target.classList.remove('reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright');
  event.target.classList.add(classes[makeAleatoryNumber()]);
  event.target.classList.add(classes[makeAleatoryNumber()]);
});
