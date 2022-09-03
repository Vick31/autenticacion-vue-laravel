<template>
    <div class="Container_div">
        <div v-for="p in list_tipo" class="contenedor">
            <div class="title-toping">
                <!-- <span v-model="nameArticle.name"></span> -->
                
                <!-- <h4 > {{p}} </h4> -->
            </div>
            <img :src="'../../img/comidas/' + p.img" alt="">
        </div>
    </div>

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
            article: {
                name: ''
                
            },
        };

    },
    created() {
        this.list_tipo = [
            {
                name: "Donde Igor",
                img: "1.jpg"
            }

        ]


    },
    mounted() {
        // this.get_token();

        this.article.name = localStorage.getItem('name')
        console.log(this.article.name)


        this.index();
    },

    methods: {
        // async get_token() {
        //     await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie")
        // },
        async index() {
            let response = await axios.get("http://127.0.0.1:8000/api/product");
            this.product_list = response.data;
        },
    }
}
</script>


