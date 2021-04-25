function generateLetter() {
  const textButton = document.getElementById('criar-carta');
  const generatedLetter = document.getElementById('carta-gerada');
  textButton.addEventListener('click', () => {
    generatedLetter.innerHTML = '';
    const textInput = document.getElementById('carta-texto').value;
    const splitText = textInput.split(' ');
    for (let index = 0; index < splitText.length; index += 1) {
      const letterContent = document.createElement('span');
      letterContent.innerText = splitText[index];
      generatedLetter.appendChild(letterContent);
    }
  });
}
generateLetter();
