const cardText = document.querySelector('#carta-texto');
const cardContainer = document.querySelector('#carta-gerada');
const genCard = document.querySelector('#criar-carta');
const countWords = document.querySelector('#carta-contador');
const arrStyle = ['newspaper', 'magazine1', 'magazine2'];
const arrSize = ['medium', 'big', 'reallybig'];
const arrRotation = ['rotateleft', 'rotateright'];
const arrInclination = ['skewleft', 'skewright'];

const randomStyle = () => arrStyle[Math.floor(Math.random() * 3)];
const randomSize = () => arrSize[Math.floor(Math.random() * 3)];
const randomRotation = () => arrRotation[Math.floor(Math.random() * 2)];
const randomInclination = () => arrInclination[Math.floor(Math.random() * 2)];

genCard.addEventListener('click', () => {
  cardContainer.innerHTML = '';
  const valor = cardText.value;
  const arr = valor.split(' ').filter((c) => c !== '');
  if (valor === '' || valor[0] === ' ') {
    cardContainer.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      const span = document.createElement('span');
      span.classList.add(
        randomStyle(),
        randomSize(),
        randomRotation(),
        randomInclination()
      );
      span.innerText = arr[i];
      cardContainer.appendChild(span);
    }
    countWords.innerText = '';
    countWords.innerText = arr.length;
  }
});

cardContainer.addEventListener('click', (event) => {
  const cardClicked = event.target;
  cardClicked.className = `${randomStyle()} ${randomSize()} ${randomRotation()} ${randomInclination()}`;
  cardContainer.className = '';
});
