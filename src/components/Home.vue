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
                    <a href="Select">
                        <!-- <img :src="'../../img/comidas/' + p.img" alt="">
                        <h4>{{  p.name  }}</h4> -->
                    </a>
                </div>
            </div>
        </div>
        <div class="container_empresas">
            <h2>Prueba algo nuevo</h2>
            <div :nombre_recibido="nombre_enviar">
                <div class="empresa button" v-for="articles in articles_list" @click="insertar(articles.name)">
                    <a href="Select">
                        <img :src="articles.image" alt="">
                        <h4>{{  articles.name  }}</h4>
                    </a>
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
            let response = await axios.get("http://127.0.0.1:8000/api/articles");
            this.articles_list = response.data.articles;
        },
        insertar(buscar) {
            let item = this.articles_list.find(pro => pro.name == buscar)
            if (buscar != undefined) {
                console.log(item.name, item.image)

                localStorage.setItem('name', item.name)
                localStorage.setItem('image', item.image)
            }
            
        }
    }
}
</script>