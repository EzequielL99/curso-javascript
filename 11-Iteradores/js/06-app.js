// forEach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (tarea, index) => console.log(`${index}. ${tarea}`) );

const arreglo = pendientes.map(tarea => tarea);

console.log(arreglo);

