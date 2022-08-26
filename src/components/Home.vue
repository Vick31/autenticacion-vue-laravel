<template>

    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../../img/slide1.jpg" class="d-block ">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../../img/slide2.jpg" class="d-block ">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../../img/slide3.jpg" class="d-block ">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div class="container_empresa">

        <!-- JOHAN  -->

        <div class="empresa button" v-for="p in list_company">
            <a href="Select">
                <img src="../../img/f.elconfidencial.com_original_cd5_15e_c44_cd515ec44327e3f273fd91e12098d635.jpg"
                    alt="">
                <h4>{{ p.name }}</h4>
            </a>
        </div>
    </div>
</template>
<style scoped>
@import "../assets/css/styleHome.css";
</style>


<script>


export default {
    data() {
        return {
            list_company: []
        };

    },
    created() {
        this.list_company = [
            {
                name: 'Donde Igor'
            },
            {
                name: 'El negro'
            },
            {
                name: 'Food House'
            },
            {
                name: 'Punto Rosa'
            },
            {
                name: 'Adsi'
            },
            {
                name: 'Donde Igor'
            },
            {
                name: 'El negro'
            },
            {
                name: 'Food House'
            },
            {
                name: 'Punto Rosa'
            },
            {
                name: 'Adsi'
            },
            {
                name: 'Donde Igor'
            },
            {
                name: 'El negro'
            },
            {
                name: 'Food House'
            },
            {
                name: 'Punto Rosa'
            },
            {
                name: 'Adsi'
            },
        ]

    },
    mounted() {
        this.get_token();
        this.index();
    },

    methods: {
        async get_token() {
            await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
        },
        async index() {
            let response = await axios.get("http://127.0.0.1:8000/api/product");
            this.product_list = response.data;
        },
    }
}
</script>