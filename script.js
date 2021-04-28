const inputText = document.getElementById('carta-texto');

const showCard = document.getElementById('carta-gerada');

const getButtonCard = document.getElementById('criar-carta');

// Gerar carta
getButtonCard.addEventListener('click', () => {
  if (inputText.value === '' || inputText.value === ' ') {
    showCard.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const separaPalavras = inputText.value.split(' ');
    for (let index = 0; index < separaPalavras.legth; index += 1) {
      const spanCard = document.createElement('span');
      showCard.appendChild(spanCard);
      spanCard.innerText = separaPalavras[index];
    }
  }
});

// Manter texto no input
function saveSotorage() {
  const inputCarta = document.getElementById('carta-texto').value;
  localStorage.setItem('carta', inputCarta);
  localStorage.getItem('carta');
}

window.onload = function initial() {
  saveSotorage();
};
