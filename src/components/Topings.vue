<template>
<div>
    <img src="../../img/" alt="">
</div>

    
    <div class="container_empresa" >
        
        <div class="empresa button" v-for="p in list_hambuguer">
        <a href="Topings">
            <img src="../../img/f.elconfidencial.com_original_cd5_15e_c44_cd515ec44327e3f273fd91e12098d635.jpg" alt="">
            <h4>{{ p.name }}</h4>
            </a>
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
            list_hambuguer: []
        };

    },
    created() {
        this.list_hambuguer = [
            {
                name: 'PAN RES'
            },
            {
                name: 'PLATANO RES'
            },
            {
                name: 'PAN POLLO'
            },
            {
                name: 'PLATANO POLLO'
            },
            {
                name: 'PAN CERDO'
            },
            {
                name: 'PLATANO CERDO'
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


