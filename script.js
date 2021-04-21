//Exercicio 3
let createLetter = document.getElementById('criar-carta');
createLetter.addEventListener('click', function(){
    let mostrarPalavras = document.getElementById('carta-gerada');
    mostrarPalavras.innerHTML = '';
    let frase = document.getElementById('carta-texto').value;
    let palavrasFrase = frase.split(' ');
    for(let i=0; i<palavrasFrase.length;i++){
        let spanFrase = document.createElement('span');
        spanFrase.innerText = palavrasFrase[i];
        if(i != palavrasFrase.length-1){
            spanFrase.innerText += ' ';
        }
        mostrarPalavras.appendChild(spanFrase);
    }
    console.log(mostrarPalavras);
    //Essa será minha carta
});