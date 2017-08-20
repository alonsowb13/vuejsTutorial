const app = new Vue({
    el: '#app',
    template: `
    <div>
        <div v-if="mostrar">
        {{ message }}
        <img :src="imagen" />
        </div>
        <button @click="toggleMostrar">Mostrar/Ocultar</button>
    </div>
    `,
    data: {
        mostrar: true,
        message: 'Hola Vue!',
        imagen: "http://laravelacademy.org/wp-content/uploads/2016/08/00-featured-vuejs-logo-simple-256x128.jpg"
    },
    methods: {
        toggleMostrar: function(){
            this.mostrar = !this.mostrar
        }
    }
})