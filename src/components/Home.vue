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

        <div class="empresa button" v-for="p in list_company" @click="insertar(p.name)">
            <a href="Select">
                <img :src="'../../img/comidas/' + p.img"
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
            list_company: [],
        };

    },
    created() {
        this.list_company = [
            {
                img: 'img1.jpg',
                name: 'Donde Igor'
            },
            {
                img: 'img2.jpg',
                name: 'El negro'
            },
            {
                img: 'img3.jpg',
                name: 'Food House'
            },
            {
                img: 'img4.jpg',
                name: 'Punto Rosa'
            },
            {
                img: 'img1.jpg',
                name: 'Adsi'
            },
            {
                img: 'img2.jpg',
                name: 'Donde Igor'
            },
            {
                img: 'img3.jpg',
                name: 'El negro'
            },
            {
                img: 'img4.jpg',
                name: 'Food House'
            },
            {
                img: 'img1.jpg',
                name: 'Punto Rosa'
            },
            {
                img: 'img2.jpg',
                name: 'Adsi'
            },
            {
                img: 'img3.jpg',
                name: 'Donde Igor'
            },
            {
                img: 'img4.jpg',
                name: 'El negro'
            },
            {
                img: 'img1.jpg',
                name: 'Food House'
            },
            {
                img: 'img2.jpg',
                name: 'Punto Rosa'
            },
            {
                img: 'img3.jpg',
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
        insertar(buscar) {
            let item = this.list_company.find(pro => pro.name == buscar)
            let encontrado = this.list_company.find((pro) => pro.name == item.name)
            if(encontrado == undefined) {
                localStorage.name = item
            }
        }
    }
}
</script>