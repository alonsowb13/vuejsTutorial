const app = new Vue({
    el: '#app',
    template: '#ejemplo',
    data: {
        mostrar: true,
        message: 'Hola Vue!',
        imagen: "http://laravelacademy.org/wp-content/uploads/2016/08/00-featured-vuejs-logo-simple-256x128.jpg",
        cursos: [
            { name: "Fundamentos de React", url: 'http://cursos.carlosazaustre.es/p/react-js' },
            { name: "Redux con React", url: 'http://cursos.carlosazaustre.es/p/curso-profesional-de-redux-y-react' },
            { name: "React Native", url: 'http://cursos.carlosazaustre.es/p/react-native' },
          ]
    },
    methods: {
        toggleMostrar: function(){
            this.mostrar = !this.mostrar
        }
    }
})