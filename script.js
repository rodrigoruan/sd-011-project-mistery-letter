const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');

criarCarta.addEventListener('click', () => {
  if (cartaTexto.value) {
    const texts = cartaTexto.value.split(' ');
    console.log(texts);
    cartaGerada.innerHTML = `<span>${texts[0]}<span>`;
    for (let index = 1; index < texts.length; index += 1) {
      cartaGerada.innerHTML += `<span>${texts[index]}<span>`;
    }
  }
});

// 3 - Deve haver um botão com id="criar-carta" e ao clicar nesse botão, a carta misteriosa deve ser gerada
// Pontos importantes:
// * Cada palavra deve aparecer dentro de uma tag `span`.
// * As tags `span` devem ser adicionadas como filhas do parágrafo que possui o id `carta-gerada`.
// O que será verificado:
// Será validado que existe um elemento button com id="criar-carta"
// Será validado que ao clicar no botão, a carta misteriosa deve ser gerada