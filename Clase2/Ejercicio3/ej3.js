
const condicion1 = {
    condicion : "Debe haber pelota",
    valor : true
}

const condicion2 = {
    condicion : "El equipo A tiene 11 jugadores",
    valor : true
}

const condicion3 = {
    condicion : "El equipo B tiene 11 jugadores",
    valor : true
}

const condicion4 = {
    condicion : "Todos los jugadores son mayores de 18",
    valor : true
}

const condicion5 = {
    condicion : "Las condiciones climaticas son buenas",
    valor : false
}

const myArray = [condicion1, condicion2, condicion3, condicion4, condicion5];

function verificar(){
        let motivos = myArray.filter(documento => documento.valor == false)

        if(motivos.length > 0){
            console.log(motivos)
            document.getElementById("mensaje").textContent = JSON.stringify(motivos);  
        }else{
            document.getElementById("mensaje").innerHTML = 'se juega'; 
        }

        
    }


