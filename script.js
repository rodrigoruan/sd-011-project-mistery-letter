//Exercicio 3
let createLetter = document.getElementById('criar-carta');
createLetter.addEventListener('click', function(){
    let mostrarPalavras = document.getElementById('carta-gerada');
    let frase = document.getElementById('carta-texto').value;
    let spanFrase = document.createElement('span');
    let palavrasFrase = frase.split(' ');
    console.log('Palavras como normal: '+palavrasFrase);
    for(let i=0; i<palavrasFrase.length;i++){
        spanFrase[i]=palavrasFrase[i];
        mostrarPalavras.appendChild(spanFrase[i]);
    }
    console.log('Palavras como span: ' + spanFrase[0]);
    //Essa será minha carta
});