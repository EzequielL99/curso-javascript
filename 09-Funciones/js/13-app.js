const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log('pausando...'),
    crearPlaylist: nombre => console.log(`Se creo la playlist con el nombre ${nombre}`),
    agregarPlaylist: playlist => console.log(`Se agrego a la lista de reproduccion la playlist ${playlist}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Reproduciendo ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
};

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(10);

reproductor.pausar();

reproductor.crearPlaylist('Heavy Metal');