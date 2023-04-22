//3) en base a una lista de peliculas donde cada pelicula tiene. Nombre, Año de Estreno, Id
//Ordenar todos los objetos de la misma por nombre y mostrarlo por pantalla.
//3.b) Hacer que se pueda ordenar con un boton HTML ascendente y descendente.
//3.c) Poder eliminar algun elemento de la lista en base a un Id
//3.e) Con un boton de html poder generar por pantalla el resultado de todas las peliculas
//de forma "Pelicula(año de estreno)"

const peliculas = [{
        nombre : 'Iron Man',
        estreno : '2005',
        id : 1
    },
    {
        nombre : 'Harry Potter',
        estreno : '2001',
        id : 2
    },
    {
        nombre : 'Rapidos y furiosos 5',
        estreno : '2014',
        id : 3
    },
    {
        nombre : 'Los Simpson',
        estreno : '2010',
        id : 4
    },
]

function mostrar(){
    document.getElementById("pelis").textContent = JSON.stringify(peliculas);
}

function ordenarAsc(){
    const rta = peliculas.sort(function(a, b){
        if(a.nombre < b.nombre) { return -1; }
        if(a.nombre > b.nombre) { return 1; }
        return 0;
    })
    document.getElementById("pelis").textContent = JSON.stringify(peliculas);
}

function ordenarDesc(){
    const rta = peliculas.sort(function(a, b){
        if(a.nombre < b.nombre) { return 1; }
        if(a.nombre > b.nombre) { return -1; }
        return 0;
    })
    
    document.getElementById("pelis").textContent = JSON.stringify(peliculas);

}

function eliminar(){
    let value = document.getElementById('buscar').value;
    console.log(value);
    buscar(value);
}

function buscar(valor){
    for(i =0; peliculas.length;i++){
        if(peliculas[i].id == valor){
            delete(peliculas[i])
        }
    }
    //if(peliculas[valor].id == valor-1){
      //  delete(peliculas[valor-1])
    //}
}


