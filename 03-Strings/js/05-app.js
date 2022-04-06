const producto = 'Monitor 20 pulgadas';

console.log(producto);

// Reemplazar texto - .replace
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar
console.log( producto.slice(0, 10) );
console.log( producto.slice(8) );
console.log( producto.slice(2, 1) );

// Alternativa a slice
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = 'Juan';
// Retornar la primera letra
console.log(usuario.substring(0, 1));

// charAt
console.log(usuario.charAt(0));