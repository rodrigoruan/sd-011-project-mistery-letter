const inputText = document.getElementById('carta-texto');

const showCard = document.getElementById('carta-gerada');

const getButtonCard = document.getElementById('criar-carta');

getButtonCard.addEventListener('click', () => {
  showCard.innerHTML = inputText.value;
});




function saveSotorage() {
  const inputCarta = document.getElementById('carta-texto').value;
  localStorage.setItem("carta", inputCarta);
  localStorage.getItem("carta");
  }


window.onload = function() {
  saveSotorage();
}
