function getInputText() {
  let texto = document.getElementById('carta-texto').value;
  texto = texto.split(' ');

  return texto;
}

document.getElementById('criar-carta').addEventListener('click', () => {
  const text = getInputText();
  const generateLetter = document.getElementById('carta-gerada');
  const inputText = document.getElementById('carta-texto');

  generateLetter.innerHTML = '';

  if (inputText.value === '' || inputText.value === ' ') {
    generateLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < text.length; index += 1) {
      const createSpan = document.createElement('span');
      createSpan.innerText = text[index];
      generateLetter.appendChild(createSpan);
    }
  }
});
