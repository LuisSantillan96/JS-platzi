console.log('Hola Mundo');

//LLamarlo por tipo de etiqueta
const h1 = document.querySelector('h1');


h1.addEventListener('click', function(){
    h1.classList.toggle('Azul');
})
