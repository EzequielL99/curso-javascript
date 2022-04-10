const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    crearPlaylist: function(nombre){
        console.log(`Se creo la playlist con el nombre ${nombre}`);
    },
    agregarPlaylist: function (playlist){
        console.log(`Se agrego a la lista de reproduccion la playlist ${playlist}`);
    }
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.reproducir(10);
reproductor.pausar();

reproductor.borrar = function(id){
    console.log(`Borrando cancion con el id ${id}`);
}

reproductor.crearPlaylist('Bad Bunny');
reproductor.agregarPlaylist('Bad Bunny');

reproductor.borrar(30);