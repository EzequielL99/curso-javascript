const usuario = true;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Es usuario y puede pagar');
} else if (!usuario) {
    console.log('Inicia sesion o crea una cuenta');
} else if (!puedePagar) {
    console.log('Fondos insuficientes');
} else {
    console.log('No, no puedes comprar');
}