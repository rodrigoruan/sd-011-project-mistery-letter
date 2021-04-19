const letterInput = document.getElementById('carta-texto');
const generateLetterButton = document.getElementById('criar-carta');
const outputLetter = document.getElementById('carta-gerada');

generateLetterButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (!letterInput.value) {
    return outputLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
  outputLetter.innerHTML = '';
  const words = letterInput.value.split(' ');

  for (let i = 0; i < words.length; i += 1) {
   const newScrap = document.createElement('span');
   newScrap.innerText = words[i];
   outputLetter.appendChild(newScrap); 
  }
});
