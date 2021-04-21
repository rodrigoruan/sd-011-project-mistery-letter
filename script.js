//Exercicio 3
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
            let spanFrase = document.createElement('span');
            spanFrase.innerText = palavrasFrase[i];
            mostrarPalavras.appendChild(spanFrase);
        }
    }
    //Esta será minha carta
});