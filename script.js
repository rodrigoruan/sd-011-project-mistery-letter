const styleClassGroup = ['newspaper','magazine1', 'magazine2'];
const sizeClassGroup = ['medium','big','reallybig'];
const rotationClassGroup = ['rotateleft','rotateright'];
const skewnessClassGroup = ['skewleft','skewright'];
const textButton = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');


function randomClassGroup() {
  let styleIndex = Math.floor(Math.random() * 3); 
  let sizeIndex = (Math.random()>0.5)? 1 : 0; 
  let rotationIndex = (Math.random()>0.5)? 1 : 0;
  let skewnessIndex = (Math.random()>0.5)? 1 : 0;
  const classList = [styleClassGroup[styleIndex], sizeClassGroup[sizeIndex], rotationClassGroup[rotationIndex], skewnessClassGroup[skewnessIndex]];
  return classList;
}


function generateLetter() {
  textButton.addEventListener('click', () => {
    generatedLetter.innerHTML = '';
    const textInput = document.getElementById('carta-texto').value;
    if (textInput.value === '' || !textInput.trim().length) {
      generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      const splitText = textInput.split(' ');
      for (let index = 0; index < splitText.length; index += 1) {
        const letterContent = document.createElement('span');
        letterContent.innerText = splitText[index];
        letterContent.classList.add(randomClassGroup()[0],randomClassGroup()[1],randomClassGroup()[2], randomClassGroup()[3]);
        generatedLetter.appendChild(letterContent);
      }
    }
  });
}
generateLetter();
