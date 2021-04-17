const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function randomClass() {
  const randomStyle = Math.floor(Math.random() * styleGroup.length);
  const randomSize = Math.floor(Math.random() * sizeGroup.length);
  const randomRotation = Math.floor(Math.random() * rotationGroup.length);
  const randomInclination = Math.floor(Math.random() * inclinationGroup.length);
  const span = document.getElementsByTagName('span');

  for (let i = 0; i < span.length; i += 1) {
    span[i].classList.add(styleGroup[randomStyle]);
    span[i].classList.add(sizeGroup[randomSize]);
    span[i].classList.add(rotationGroup[randomRotation]);
    span[i].classList.add(inclinationGroup[randomInclination]);
  }
}

function createLetter() {
  const button = document.getElementById('criar-carta');
  const input = document.getElementById('carta-texto');
  const result = document.getElementById('carta-gerada');

  button.addEventListener('click', () => {
    result.innerText = '';

    if (!input.value || !input.value.trim()) {
      result.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      const breakInput = input.value.match(/\b(\w+)\b/g);
      for (let i = 0; i < breakInput.length; i += 1) {
        const span = document.createElement('span');
        span.innerText = breakInput[i];
        result.appendChild(span);
        randomClass();
      }
    }
  });
}

createLetter();
