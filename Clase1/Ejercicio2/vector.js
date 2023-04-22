var numeros = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function agregarValor(){
    console.log("Agregando..");

    var num = getRandomInt(1,10);
    numeros.push(num)

}

function mostrarVector(){
    for (i=0; i < numeros.length; i++){
        //var numActual = numeros [i];
        document.getElementById("valorActual").textContent = JSON.stringify(numeros);

    }
}

function ordenarVector(){
    numeros.sort();
    mostrarVector();
}

function buscarNumero(){
    var resultado = null;
    var numBuscado = document.getElementById("buscador").value;

    for (i=0; i < numeros.length; i++){
        if(numBuscado == numeros[i]){
            resultado = numeros[i];
            i = numeros.length+1;
        }

    }

    if(resultado == null){
        document.body.style.backgroundColor = "#FF0000";
    }else{
        document.body.style.backgroundColor = "#00CC00";
    }
    
}