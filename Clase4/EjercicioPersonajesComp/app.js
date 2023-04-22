const app = Vue.createApp({
    data() {
        return {
          valor: 'what?',
          personajes: [],
          contador: 0,
        }
      },
      methods:{ 
        actualizarclicks(e){
          this.contador++;
      }
      },
      created: async function () {
        const resultado = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,8,12,15,24,56');                
        this.personajes = await resultado.json();
        console.log(this.personajes);
    }
});
app.component('personaje', {
    data(){
        return {
          contadorPersonaje:0
        }
    },
    template: `  
        <div class="card" style="width: 18rem;">
        <img class = "card-img-top" :src = "this.imagen" alt = "Card image cap">
        <div class="card-body">
        <h5 class="card-title">{{this.nombre}}</h5>
        <h4>{{this.especie}}</h4>
        <h6 class="card-subtitle mb-2 text-muted">{{this.genero}}</h6>
        <p class="card-text">Este personaje vive acutualmente en: {{this.locacion}}.</p>
        <p>Cantidad de click sobre este personaje: {{this.contadorPersonaje}}</p>
        <input type='button' @click='personajeClick()' value="Click!">
        </div>
        </div>`,
    props:['imagen','nombre', 'especie', 'genero', 'locacion'],
    methods:{
      personajeClick(){
        console.log('Se toco el personaje ' + this.nombre);
        this.contadorPersonaje++
        this.$emit('click-personaje', 'click!!');
    },
      
    }
});

app.mount('#app');