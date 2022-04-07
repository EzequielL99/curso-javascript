'use strict';

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true
};

// Sellar un objeto para evitar que se agreguen propiedades
Object.seal( producto );

producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);
console.log(Object.isSealed( producto ));