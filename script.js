// get input
let inputLetter = document.getElementById('carta-texto');
// get paragraph
let generatedLetter = document.getElementById('carta-gerada');
// Array of classes
let styleClassArray = ['magazine1','magazine2'];
let sizeClassArray = ['medium', 'big', 'reallybig'];
let rotationClassArray = ['rotateleft', 'rotateright'];
let skewClassArray = ['skewleft', 'skewright'];


function randomizeClasses (element) {
  let randomStyle = styleClassArray[Math.floor(Math.random() * styleClassArray.length)]
  let randomSize = sizeClassArray[Math.floor(Math.random() * sizeClassArray.length)]
  let randomRotation = rotationClassArray[Math.floor(Math.random() * rotationClassArray.length)]
  let randomSkew = skewClassArray[Math.floor(Math.random() * skewClassArray.length)]
  element.classList.add(randomStyle, randomSize, randomRotation, randomSkew)
  return element;
}

//// Create Letter
function createLetter() {
  generatedLetter.innerHTML = '';
  inputValue = inputLetter.value;
  if (inputValue.trim() === '') {
    let errorText = 'Por favor, digite o conteúdo da carta.'
    generatedLetter.innerText = errorText;
  }
  let brokenString = inputValue.split(' ')
  for (let i = 0; i < brokenString.length; i +=1) {
    let letterValueSpan = document.createElement('span');
    randomizeClasses (letterValueSpan);
    letterValueSpan.innerHTML = brokenString[i];
    generatedLetter.appendChild(letterValueSpan);
  }
}

// function randomizeClasses () {
//   let randomStyle = styleClassArray[Math.floor(Math.random() * styleClassArray.length)]
//   let randomSize = sizeClassArray[Math.floor(Math.random() * sizeClassArray.length)]
//   let randomRotation = rotationClassArray[Math.floor(Math.random() * rotationClassArray.length)]
//   let randomSkew = skewClassArray[Math.floor(Math.random() * skewClassArray.length)]
//   return randomStyle;
// }

// //// Create Letter
// function createLetter() {
//   generatedLetter.innerHTML = '';
//   inputValue = inputLetter.value;
//   if (inputValue.trim() === '') {
//     let errorText = 'Por favor, digite o conteúdo da carta.'
//     generatedLetter.innerText = errorText;
//   }
//   let brokenString = inputValue.split(' ')
//   for (let i = 0; i < brokenString.length; i +=1) {
//     randomizeClasses ();
//     let letterValueSpan = document.createElement('span');
//     letterValueSpan.innerHTML = brokenString[i];
//     console.log(randomStyle) // PORQUE NAO RETONAR O RESULTADO DA FUNCAO RANDOMIZE AQU?!
//     letterValueSpan.classList.add(randomStyle)
//     generatedLetter.appendChild(letterValueSpan);
//   }
// }

