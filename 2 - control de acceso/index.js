'use strict';

const userName = prompt ("¿me dirías tu nombre?");

if (userName === 'Ayelen' || userName === 'Rocío'){
    const welcome = `Bienvenida ${userName}`;
    console.log (welcome);
} else {
    const notWelcome = 'Lo sentiemos pero el usuario que has introducido no está registrado';
    console.log (notWelcome);
}

// EJERCICIO 2
// Control de acceso
// En este ejercicio vamos a crear un control de acceso. Para ello prepararemos una variable y le asignaremos un nombre. Posteriormente, si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".