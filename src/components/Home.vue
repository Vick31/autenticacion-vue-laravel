<template>
    <div class="section">

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
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="container">

            <h2>Visita tu compania favorita</h2>

            <div class="companies">

                <div class="empresa button" v-for="companies in articles_list">

                    <div class="div-img">

                        <img :src="companies.logo" alt="">

                    </div>

                    <div class="content">

                        <h5>{{ companies.name }}</h5>
                        <small> {{companies.phone}} </small>

                        <router-link class="links" to="/select">
                            <span @click="insertar(companies.name)">Visitar</span>
                        </router-link>
                    </div>


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
            articles_list: [],
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
            this.articles_list = response.data.companies;
        },
        insertar(buscar) {

            let item = this.articles_list.find(pro => pro.name == buscar)
            if (buscar != undefined) {

                let company = {
                    'id': item.id,
                    'name': item.name,
                };

                localStorage.setItem('company', JSON.stringify(company)); //JSON.stringigy convierte un objeto a string

                console.log(company)
            }

        }
    }
}
</script>