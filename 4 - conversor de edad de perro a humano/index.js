'user strict';

const dogAge = parseInt(prompt('¿Cuántos años tiene tu perre?'));
let olderDogAge = (dogAge - 2) * 5 + 24;

if (dogAge === 1) {
    console.log('Tu perre tiene 15 años humanos')
} else if ( dogAge === 2 ){
    console.log ('Tu perre tiene 24 años humanos')
} else if ( dogAge <= 0){
    console.log ('Tu perrete no ha nacido aún')
} else {
    console.log (`Tu perre tiene ${olderDogAge}`) ;
}

// Consigna: 
//Conversor de edad de perro a humano
// Te habrá pasado varias veces de ir por la calle y que alguien te pregunte "perdona, tienes a mano un conversor de edad de perros a humanos" y tener que contestar con vergüenza que no y que esa persona te mire raro... ¡hasta ahora! Vamos a crearla para evitar esto que pasa tan a menudo. Para ello, las reglas son las siguientes:
// El primer año de un perro equivale a 15 años de humano
// El segundo año de un perro equivale a nueve años de humano
// A partir del tercero, cada año de perro equivale a 5 años de humano.