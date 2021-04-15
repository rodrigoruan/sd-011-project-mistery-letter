const generateButton = document.querySelector('#criar-carta');
const originalText = document.querySelector('#carta-texto');
const allSpans = document.querySelector('#carta-gerada');

// Criação de grupos de classes
const spanStyle = ['newspaper', 'magazine1', 'magazine2'];
const spanSize = ['medium', 'big', 'reallybig'];
const spanRotation = ['rotateleft', 'rotateright'];
const spanWay = ['skewleft', 'skewright'];

// função para alocar classes
function sortClasses() {
  const span = document.querySelectorAll('span');
  for (let index = 0; index < span.length; index += 1) {
    let classIndex = Math.floor(Math.random() * spanStyle.length);
    span[index].classList.add(`${spanStyle[classIndex]}`);
    classIndex = Math.floor(Math.random() * spanSize.length);
    span[index].classList.add(`${spanSize[classIndex]}`);
    classIndex = Math.floor(Math.random() * spanRotation.length);
    span[index].classList.add(`${spanRotation[classIndex]}`);
    classIndex = Math.floor(Math.random() * spanWay.length);
    span[index].classList.add(`${spanWay[classIndex]}`);
  }
}

function createSpans() {
  generateButton.addEventListener('click', () => {
    const string = originalText.value;
    if (originalText.value.trim() === '') {
      allSpans.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      const array = string.split(' ');
      console.log(array);
      for (let index = 0; index < array.length; index += 1) {
        const span = document.createElement('span');
        span.innerText = array[index];
        allSpans.appendChild(span);
      }
      sortClasses();
    }
  });
}
createSpans();
