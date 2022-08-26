<template>
    <div v-for="p in list_tipo">
        <img :src="'../../img/comidas/' + p.img" alt="">
        <h1> {{ p.name }} </h1>

    </div>


    <!-- <div class="container_empresa">

        <div class="empresa button" v-for="p in ">
            <a href="Topings">
                <img src="../../img/f.elconfidencial.com_original_cd5_15e_c44_cd515ec44327e3f273fd91e12098d635.jpg"
                    alt="">
                <h4>{{ p.name }}</h4>
            </a>
        </div>
    </div> -->
</template>
<style scoped>
@import "../assets/css/styleToping.css";
</style>


<script>


export default {
    data() {
        return {
            list_tipo: [],
            list_toping: [],
        };

    },
    created() {
        this.list_tipo = [
            {
                name: "igor",
                img: "img1"
            }

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


