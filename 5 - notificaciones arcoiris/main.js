'use strict';

const container = document.querySelector ('.container');
const title = document.querySelector ('.title');
const text = document.querySelector ('.text');
if (container.classList.contains('success')){
    title.innerHTML = 'Aviso';
    text.innerHTML = 'Tenga cuidado';
} else if (container.classList.contains ('warning')){
    title.innerHTML = ' Error';
    text.innerHTML = 'Ha surgido un error';
} else if (container.classList.contains('success')){
    title.innerHTML = 'Correcto';
    text.innerHTML = 'Los datos son correctos';
}


// Notificaciones arcoiris
// Crea un div que contenga un título "NOTIFICACIÓN" y un texto "Mensaje por defecto". Crea también tres clases:
// La primera, .success, aplicará un borde verde oscuro, un fondo verde claro y el color de fuente verde oscuro
// La segunda, .error, igual pero sustituyendo el verde por rojo
// La tercera, .warning, lo mismo pero usando el color amarillo
// Usando JavaScript, haremos que:
// Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
// Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
// Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'
// Cambia la clase en HTML y comprueba que el código de JavaScript funciona.