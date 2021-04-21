//Exercicio 3
let createLetter = document.getElementById('criar-carta');
createLetter.addEventListener('click', function(){
    let mostrarPalavras = document.getElementById('carta-gerada');
    let frase = document.getElementById('carta-texto').value;
    let palavrasFrase = frase.split(' ');
    for(let i=0; i<palavrasFrase.length;i++){
        let spanFrase = document.createElement('span');
        spanFrase.innerText = palavrasFrase[i];
        mostrarPalavras.appendChild(spanFrase);
    }
    //Essa será minha carta
});