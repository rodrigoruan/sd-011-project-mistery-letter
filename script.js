const inputText = document.getElementById('carta-texto');

const showCard = document.getElementById('carta-gerada');

const getButtonCard = document.getElementById('criar-carta');

// Gerar carta
getButtonCard.addEventListener('click', () => {
  showCard.innerHTML = inputText.value;
});

// Manter texto no input
function saveSotorage() {
  const inputCarta = document.getElementById('carta-texto').value;
  localStorage.setItem('carta', inputCarta);
  localStorage.getItem('carta');
}

function checkTextInput() {
  if (inputText.value === null || inputText.value === ' ') {
    showCard.innerHTML = 'Por favor, digite o conteúdo da carta';
  }
}
checkTextInput();

window.onload = function initial() {
  saveSotorage();
};
