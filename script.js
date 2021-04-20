const buttonText = document.getElementById('criar-carta');
const cartaGerada = document.querySelector('#carta-gerada p');
const textInput = document.getElementById('carta-texto');

function addText() {
  if (textInput.value === '') {
    alert('Por favor, digite o conteúdo da carta.');
  }
  const tank = textInput.value.split(' ');
  for (let i = 0; i < tank.length; i += 1) {
    const x = document.createElement('span');
    x.innerText = tank[i];
    cartaGerada.appendChild(x);
  }
}

textInput.value = 'A S D F G H J 1 3 O 4 F';
buttonText.addEventListener('click', addText);

const styleClasses = ['newspaper', 'magazine1', 'magazine2'];
const sizeClasses = ['medium', 'big', 'reallybig'];
const rotationClasses = ['rotateleft', 'rotateright'];
const skewClasses = ['skewleft', 'skewright'];

function setClasses() {
  const x = cartaGerada.children;
  for (let i = 0; i < x.length; i += 1) {
    const style = Math.floor(Math.random() * styleClasses.length);
    const size = Math.floor(Math.random() * sizeClasses.length);
    const rotation = Math.floor(Math.random() * rotationClasses.length);
    const skew = Math.floor(Math.random() * skewClasses.length);
    x[i].classList.add(styleClasses[style]);
    x[i].classList.add(sizeClasses[size]);
    x[i].classList.add(rotationClasses[rotation]);
    x[i].classList.add(skewClasses[skew]);
  }
}

buttonText.addEventListener('click', setClasses);
