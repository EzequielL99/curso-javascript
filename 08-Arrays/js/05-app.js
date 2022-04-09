// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// // Agregar al final del arreglo
// meses.push('Junio');
// meses.push('Julio');

// console.table(meses);

const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400
};

const producto2 = {
    nombre: 'Celular',
    precio: 800
};

const producto3 = {
    nombre: 'Teclado',
    precio: 50
};

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.log(carrito);