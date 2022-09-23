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
        <div class="container_empresas">
            <h2>Vistados recientemente</h2>
            <div>
                <div class="empresa button">
                    <router-link to="/select"></router-link>
                </div>
            </div>
        </div>
        <div class="container_empresas">
            <h2>Prueba algo nuevo</h2>
            <div>
                <div class="empresa button" v-for="companies in companies_list" @click="insertar(companies.name)">
                    <router-link to="/select">
                        <img :src="companies.logo" alt="">
                        <h4>{{ companies.name }}</h4>
                    </router-link>
                </div>
            </div>
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
            companies_list: [],
        };

    },
    created() {


    },
    mounted() {
        // this.get_token();
        this.index();
    },

    methods: {
        // async get_token() {
        //     await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
        // },
        async index() {
            let response = await axios.get("http://127.0.0.1:8000/api/companies");
            this.companies_list = response.data.companies;
        },
        insertar(buscar) {
            let item = this.companies_list.find(pro => pro.name == buscar)
            if (buscar != undefined) {

                let company = {
                    'id': item.id,
                    'name': item.name,
                };

                localStorage.setItem('company', JSON.stringify(company)); //JSON.stringigy convierte un objeto a string
            }

        }
    }
}
</script>