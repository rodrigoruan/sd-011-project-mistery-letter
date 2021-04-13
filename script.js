// get input
let inputLetter = document.getElementById('carta-texto');
// get p
let generatedLetter = document.getElementById('carta-gerada');

//// Create Letter
function createLetter() {
  inputValue = inputLetter.value;
  if (inputValue.trim() === '') {
    let errorText = 'Por favor, digite o conteúdo da carta.'
    generatedLetter.innerText = errorText;
  }
  let brokenString = inputValue.split(' ')
  for (let i =0; i < brokenString.length; i +=1) {
    let letterValueSpan = document.createElement('span');
    generatedLetter.appendChild(letterValueSpan).innerText = brokenString[i];
  }
}