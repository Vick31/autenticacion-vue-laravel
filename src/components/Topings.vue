<template>
    <div class="header">

        <div class="company">
            <h4> {{ company.name }} </h4>
            <img :src="company.logo" alt="">
        </div>

        <div>
            <iframe class="maps"
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2303.8923872806686!2d-75.59563870111862!3d1.6288451132891066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8e2451f51faf07c5%3A0x3e70f4efd3e1d405!2sRANCHO%20BURGER%2C%20Cl%2016%2C%20Florencia%2C%20Caquet%C3%A1!3m2!1d1.6289311!2d-75.59517439999999!5e0!3m2!1ses!2sco!4v1661783624907!5m2!1ses!2sco"
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="description-company">

            <p> <b>Dirección:</b> {{company.address}} </p>
            <p> <b>Contacto:</b> {{company.phone}} </p>

        </div>

    </div>
    <div class="Container_div">
        <div class="contenedor">

            <img src="../../img/comidas/img1.jpg" alt="">

            <h1> {{selection.name}} </h1>
            <h2>${{selection.price}}</h2>
        </div>
    </div>

</template>
<style scoped>
    @import "../assets/css/styleTopings.css";
    </style>


<script>


export default {
    data() {
        return {
            list_tipo: [],
            list_toping: [],
            article: {
                name: '',
                type: ''
            },

            selection: {
                name: '',
                logo: '',
                price: '',

            },
            company: {
                id: '',
                name: '',
                logo: '',
                address: '',
                phone: '',
            },
        };

    },
    created() {

    },
    mounted() {
        this.selection = JSON.parse(localStorage.getItem('selection')); //JSON.parse convierte un string en objeto
        this.company = JSON.parse(localStorage.getItem('company'));
        console.log(this.selection)
        this.get_token();
        this.index();
    },

    methods: {
        async get_token() {
            await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
        },
        async index() {
            let response = await axios.get("http://127.0.0.1:8000/api/ingrediente");
            this.list_toping = response.data;
            console.log(this.list_toping)
        },

    }
}
</script>


