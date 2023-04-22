//5) Hacer un metodo que reciba un array de string y devuelva otro pero todo pasado a mayuscula

let dias = ["lunes", "martes",  "miercoles", "jueves",  "viernes", "sabado", "domingo"]

function convertir(dias){

    for (i = 0; i < dias.length; i++) {        
        dias[i]  = dias[i].toUpperCase()   
     }

    return dias
    console.log(dias)
}
function minuscula(){
    document.getElementById("valores").textContent = JSON.stringify(dias);
}
function mayuscula(){
    document.getElementById("valores").textContent = JSON.stringify( convertir(dias));
}