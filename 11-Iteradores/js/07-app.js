const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

const carrito = [{
        nombre: 'Monitor',
        precio: 500
    },
    {
        nombre: 'Television',
        precio: 100
    },
    {
        nombre: 'Tablet',
        precio: 200
    },
    {
        nombre: 'Audifonos',
        precio: 300
    }
];

for (let tarea of pendientes) {
    console.log(tarea);
}

for (let producto of carrito){
    console.log(producto);
}