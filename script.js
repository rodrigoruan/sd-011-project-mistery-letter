const styleClass = ['newspaper', 'magazine1', 'magazine2'];
const sizeClass = ['medium', 'big', 'reallybig'];
const rotClass = ['rotateleft', 'rotateright'];
const skewClass = ['skewleft', 'skewright'];
const textButton = document.getElementById('criar-carta');
const generatedLetter = document.getElementById('carta-gerada');
const letterCounter = document.getElementById('carta-contador');

function randClass() {
  const style = Math.floor(Math.random() * 3);
  const size = (Math.random() > 0.5) ? 1 : 0;
  const rotation = (Math.random() > 0.5) ? 1 : 0;
  const skewness = (Math.random() > 0.5) ? 1 : 0;
  const classList = [styleClass[style], sizeClass[size], rotClass[rotation], skewClass[skewness]];
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
        const letterCont = document.createElement('span');
        letterCont.innerText = splitText[index];
        letterCont.classList.add(randClass()[0], randClass()[1], randClass()[2], randClass()[3]);
        generatedLetter.appendChild(letterCont);
      }
    }
    letterCounter.innerText = generatedLetter.childElementCount;
  });
}
generateLetter();
