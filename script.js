const input = document.getElementById('carta-texto');
const botao = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');

input.addEventListener('click', () => {
  if (input.value !== 0) {
    const span = input.value.split(' ');
    paragrafo.innerHTML = `<span>${span[0]}<span>`;
    for (let index = 1; index < span.length; index += 1) {
      paragrafo.innerHTML += `<span>${span[index]}<span>`;
    }
  }
});