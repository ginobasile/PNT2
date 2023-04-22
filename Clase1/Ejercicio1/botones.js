var valor = 0;
function botonera(tipoBoton){
    var contador = document.getElementById("valorActual").value;
    if(tipoBoton.value == "aumentar"){
        valor++;
    }else{
        valor--
    }
    document.getElementById("valorActual").textContent = valor;

}