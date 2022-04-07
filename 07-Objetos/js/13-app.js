'use strict';

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
};

// Obtener las llaves
console.log(Object.keys( producto ));

// Obtener los valores
console.log(Object.values( producto ));

// Retorna el par key, value como array
console.log(Object.entries( producto ));