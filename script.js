function createLetter() {
  const button = document.getElementById('criar-carta');
  const input = document.getElementById('carta-texto');
  const result = document.getElementById('carta-gerada');
  
  button.addEventListener('click', () => {
  const breakInput = input.value.match(/\b(\w+)\b/g);

    for (let i = 0; i < breakInput.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = breakInput[i];
      result.appendChild(span);
    }
  });
}

createLetter();