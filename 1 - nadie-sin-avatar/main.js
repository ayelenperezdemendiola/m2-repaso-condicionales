'use strict';

const DEFAULT_AVATAR = 'http://placehold.it/300x300';
let userAvatar = 'http://www.fillmurray.com/300/300';
const user__avatar = document.querySelector ('.user__avatar');

user__avatar.src = userAvatar; 
userAvatar = '';

const urlUserAvatar = prompt ("¿Podrías poner aquí la URL de tu imagen?");
const imgUserAvatar = urlUserAvatar || DEFAULT_AVATAR;

user__avatar.src = imgUserAvatar;

// Consigna: 
//Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img.
// Ahora vamos a plantear que userAvatar pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto molona y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. ¡Ahora no debería verse ninguna imagen en la página!
// Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
// si tenemos el avatar del usuario se muestre este.
// si no tenemos datos del avatar del usuario, se muestre el avatar por defecto