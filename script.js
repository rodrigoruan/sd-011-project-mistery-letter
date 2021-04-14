const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');

criarCarta.addEventListener('click', () => {
  if (cartaTexto.value && cartaTexto.value !== ' ') {
    const texts = cartaTexto.value.split(' ');
    console.log(texts);
    cartaGerada.innerHTML = `<span>${texts[0]}<span>`;
    for (let index = 1; index < texts.length; index += 1) {
      cartaGerada.innerHTML += `<span>${texts[index]}<span>`;
    }
  } else {
    cartaGerada.innerText = 'por favor, digite o conteúdo da carta.';
  }
});
