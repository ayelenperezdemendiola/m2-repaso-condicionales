'use strict';

const userYearContainer = document.querySelector('.container__actual--year');
const nextBiYearContainer = document.querySelector('.container__nextBi--year');
const userYear = parseInt(prompt('Please, write a year'));
const firstBiYear = 4;

userYearContainer.innerHTML = userYear;
if (userYear < 0 || !userYear) {
    nextBiYearContainer.innerHTML = 'Por favor, introduce un número válido';
}
else if (userYear % 4 === 0) {
    let result = userYear + 4;
    nextBiYearContainer.innerHTML = `El próximo año bisiesto es el ${result}`;
} else if (userYear % 4 === 3) {
    let result = userYear + 1;
    nextBiYearContainer.innerHTML = `El próximo año bisiesto es el ${result}`;
} else if (userYear % 4 === 2) {
    let result = userYear + 2;
    nextBiYearContainer.innerHTML = `El próximo año bisiesto es el ${result}`;
} else if (userYear % 4 === 1) {
    let result = userYear + 3;
    nextBiYearContainer.innerHTML = `El próximo año bisiesto es el ${result}`;
}

// EJERCICIO 7 BONUS
// Calcular cuál va a ser el siguiente año bisiesto
// Vamos a escribir un pequeño programa que nos permita saber cuál será el siguiente año bisiesto. Para aportar un poco de información, sabemos que los años bisiestos se producen cada cuatro años a partir del año 0. El primer año bisiesto fue 4, el segundo 8 y así progresivamente. La idea de este ejercicio es que, si estuviésemos en el año 3, al ejecutarlo apareciese en la consola el texto "4", ya que el año 4 sería el siguiente año bisiesto.
// Pista: Tenemos que escribir el año en el que estamos en una constante.