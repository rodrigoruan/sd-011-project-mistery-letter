const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');

const stylesClasses = {
  magazine: ['magazine1', 'magazine2'],
  sizeFont: ['medium', 'big', 'reallybig'],
  rotate: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'],
};

function generateRandomClasses() {
  const classesRamdom = [];
  let zindex = 0;
  for (const key in stylesClasses) {
    for (let index = 0; index < stylesClasses[key].length; index += 1) {
      const randomNumber = Math.round(Math.random());
      if (randomNumber) {
        classesRamdom[zindex] = stylesClasses[key][index];
        zindex += 1;
        break;
      }
    }
  }
  return classesRamdom;
}

let classesNamesSelecteds = generateRandomClasses();

criarCarta.addEventListener('click', () => {
  if (cartaTexto.value && cartaTexto.value !== ' ') {
    const texts = cartaTexto.value.split(' ');
    console.log(texts);
    cartaGerada.innerHTML = `<span class="${classesNamesSelecteds.join(' ')}">${texts[0]}<span>`;
    for (let index = 1; index < texts.length; index += 1) {
      classesNamesSelecteds = generateRandomClasses();
      const classesFormated = `class="${classesNamesSelecteds.join(' ')}"`;
      cartaGerada.innerHTML += `<span ${classesFormated}>${texts[index]}<span>`;
    }
  } else {
    cartaGerada.innerText = 'por favor, digite o conteúdo da carta.';
  }
});
