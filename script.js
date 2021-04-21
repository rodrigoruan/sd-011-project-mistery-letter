
let arrayEstilo = ['newspaper','magazine1','magazine2']; //3
let arrayTamanho = ['medium','big','reallybig']; //3
let arrayRotacao = ['rotateleft','rotateright']; //2
let arrayInclinacao = ['skewleft','skewright']; //2

let createLetter = document.getElementById('criar-carta');
createLetter.addEventListener('click', function(){
    let mostrarPalavras = document.getElementById('carta-gerada');
    mostrarPalavras.innerHTML = '';
    let frase = document.getElementById('carta-texto').value;
    if (frase=='' || !frase.trim()){
        mostrarPalavras.innerText = 'Por favor, digite o conteúdo da carta.';
    }else{
        let palavrasFrase = frase.split(' ');
        for(let i=0; i<palavrasFrase.length;i++){
            let randomEstilo = Math.floor(Math.random()*3);
            let randomTamanho = Math.floor(Math.random()*3);
            let randomRotacao = Math.floor(Math.random()*2);
            let randomInclinacao = Math.floor(Math.random()*2);

            let spanFrase = document.createElement('span');
            spanFrase.className='';
            spanFrase.className=arrayEstilo[randomEstilo]+' '+arrayTamanho[randomTamanho]+' '+arrayRotacao[randomRotacao]+' '+arrayInclinacao[randomInclinacao];
            spanFrase.innerText = palavrasFrase[i];
            mostrarPalavras.appendChild(spanFrase);
        }
    }
    //Esta será minha carta
});