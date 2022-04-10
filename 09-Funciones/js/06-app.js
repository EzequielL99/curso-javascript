function saludar(nombre = 'Desconocido', apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar();
saludar('Juan');
saludar('Juan', 'De la torre');