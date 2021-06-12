const botao = document.getElementById('criar-carta');
const input = document.getElementById('carta-texto');

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
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
    //caso contrário  percorre o array palavras criado com a função split
    //enquanto index for menor que o tamanho do array palavras à tag spag será atribuído
    //o valor palavras na posição index. Em seguida atribuir span como filhos de paragrafo
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
    span[index].classList.add(estilos.style[Math.floor(Math.random() * estilos.style.length)]);
    span[index].classList.add(estilos.size[Math.floor(Math.random() * estilos.size.length)]);
    span[index].classList.add(estilos.rotation[Math.floor(Math.random() * estilos.rotation.length)]);
    span[index].classList.add(estilos.slope[Math.floor(Math.random() * estilos.slope.length)]);
  }
});

// Adiciona contador de palavras da carta
botao.addEventListener('click', () => {
  const totalSpan = document.getElementsByTagName('span').length;
  document.getElementById('carta-contador').innerText = totalSpan;
});