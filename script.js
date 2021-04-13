// get input
let inputLetter = document.getElementById('carta-texto');
// get p
let generatedLetter = document.getElementById('carta-gerada');

//// Create Letter
function createLetter() {
  inputValue = inputLetter.value;
  generatedLetter.innerHTML = inputValue;
}