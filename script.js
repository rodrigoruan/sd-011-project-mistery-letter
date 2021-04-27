const arrayEstilo = ['newspaper', 'magazine1', 'magazine2']; // 3
const arrayTamanho = ['medium', 'big', 'reallybig']; // 3
const arrayRotacao = ['rotateleft', 'rotateright']; // 2
const arrayInclinacao = ['skewleft', 'skewright']; // 2
const barra = ' ';

const createLetter = document.getElementById('criar-carta');
createLetter.addEventListener('click', () => {
  const mostrarPalavras = document.getElementById('carta-gerada');
  mostrarPalavras.innerHTML = ''; const frase = document.getElementById('carta-texto').value;
  if (frase === '' || !frase.trim()) {
    mostrarPalavras.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const palavrasFrase = frase.split(' ');
    document.getElementById('carta-contador').innerHTML = palavrasFrase.length;
    for (let i = 0; i < palavrasFrase.length; i += 1) {
      const randomEstilo = Math.floor(Math.random() * 3);
      const randomTamanho = Math.floor(Math.random() * 3);
      const randomRotacao = Math.floor(Math.random() * 2);
      const randomInclinacao = Math.floor(Math.random() * 2);
      const spanFrase = document.createElement('span'); spanFrase.className = '';
      spanFrase.className = arrayEstilo[randomEstilo] + barra + arrayTamanho[randomTamanho]
      + barra + arrayRotacao[randomRotacao] + barra + arrayInclinacao[randomInclinacao];
      spanFrase.innerText = palavrasFrase[i]; mostrarPalavras.appendChild(spanFrase);
    }
  }
});
