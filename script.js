function displayTheText() {
  const p = document.getElementById('carta-gerada');
  const input = document.getElementById('carta-texto');
  const word = input.value.split(' ');
  for (let i in word) {
    const span = document.createElement('span');
    span.append(word[i]);
    p.appendChild(span);
  }
  input.value = '';
}

function removeSpans() {
  const p = document.getElementById('carta-gerada');
  if (!p.childElementCount == 0) {
    while (p.firstChild) {
      p.removeChild(p.firstChild);
    }
  }
}
