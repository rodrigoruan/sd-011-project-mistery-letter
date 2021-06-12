const botao = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');
const contador = document.getElementById('carta-contador');

// Função para dividir as palavras da frase
function DivideTexto() {
  const palavras = input.value.split(' ');
  return palavras;
}

botao.addEventListener('click', () => {
  // constante que traz a função para o eventlistener
  const palavras = DivideTexto();
  const paragrafo = document.getElementById('carta-gerada');
  // limpa o parágrafo para não acumular palavras
  paragrafo.innerHTML = '';
  // condicional se o valor do input for vazio ou espaço em branco emite o texto
  if (input.value === ' ' || input.value === '') {
    paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < palavras.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = palavras[index];
      paragrafo.appendChild(span);
    }
  }
});

// constante contendo todo os estilos dos requsisitos
const estilos = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright'],
  slope: ['skewleft', 'skewright'],
};

// Adiciona função para adicionar classes aleatórias à tag span
botao.addEventListener('click', () => {
  const span = document.getElementsByTagName('span');
  for (let index = 0; index < span.length; index += 1) {
    span[index].classList.add(
      estilos.style[Math.floor(Math.random() * estilos.style.length)]);

    span[index].classList.add(
      estilos.size[Math.floor(Math.random() * estilos.size.length)]);

    span[index].classList.add(
      estilos.rotation[Math.floor(Math.random() * estilos.rotation.length)]);
      
    span[index].classList.add(
      estilos.slope[Math.floor(Math.random() * estilos.slope.length)]
    );
  }
});

botao.addEventListener('click', () => {
  const palavras = DivideTexto();
  if (palavras === '' || palavras === ' ') {
    return contador.innerHTML = 0;
  }
  return contador.innerHTML = palavras.length;
});
