'use strict';
const nombre = 'Hola';
const precio = 20;

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`)
    }
};

const producto2 = {
    nombre: 'tablet',
    precio: 1000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`)
    }
};

producto2.mostrarInfo();