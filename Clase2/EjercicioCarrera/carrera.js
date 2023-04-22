async function Largar(){
    console.log("Largando");
    const c1 = Correr("Gino");
    const c2 = Correr("Glenda");
    const c3 = Correr("Pablo");

    const resultado = await Promise.all([c1,c2,c3]);
    //Espera a que se terminen los c1,c2,c3
    resultado.sort((a,b) => a.tiempo - b.tiempo);
    resultado.forEach((corredor, indice) => {
            console.log(`El corredor ${corredor.nombre} llego en la posicion ${indice+1} con un tiempo de ${corredor.tiempo}`);
    });

}

async function LargarCarreraMuchos()
{
    let lista = [];
    console.log("Inicio de carrera");
    for(let index=0; index<30; index++){
        const corredor = Correr(index);
        lista.push(corredor);
    }

    const resultado = await Promise.all(lista);
    resultado.sort((a,b) => a.tiempo - b.tiempo);
    resultado.forEach((corredor, indice) => {
            console.log(`El corredor ${corredor.nombre} llego en la posicion ${indice+1} con un tiempo de ${corredor.tiempo}`);
    });
}

async function Correr(nombre){
    const tiempo = getRandomInt(10,3);
    const corredor = {nombre, tiempo};
        return new Promise((resolve) => {
            setTimeout(() => resolve (corredor), tiempo)

        });
       


}

function getRandomInt(max,min){
    return Math.floor(Math.random() * max) + min
}


