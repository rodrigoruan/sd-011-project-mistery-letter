const inputText = document.getElementById('carta-texto');

const Showcarta = document.getElementById('carta-gerada');

const buttonCarta = document.getElementById('criar-carta');

function saveSotorage() {
  const inputCarta = document.getElementById('carta-texto').value;
  localStorage.setItem("carta", inputCarta);
  localStorage.getItem("carta");
  }


window.onload = function() {
  saveSotorage();
}
