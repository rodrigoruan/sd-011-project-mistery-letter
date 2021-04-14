// Requisito 3: Quebrar frase e criar spans
const generateButton = document.querySelector('#criar-carta');
const originalText = document.querySelector('#carta-texto');
const allSpans = document.querySelector('#carta-gerada');

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
    }
  });
}
createSpans();
