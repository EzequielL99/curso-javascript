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

// for in itera sobre objetos
const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
};

// for(let propiedad in automovil){
//     console.log(`${propiedad}: ${automovil[propiedad]}`);
// }

for(let [llave, valor] of Object.entries(automovil)){
    console.log(llave);
    console.log(valor);
}