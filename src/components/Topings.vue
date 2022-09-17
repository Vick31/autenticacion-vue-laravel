<template>
    <div class="Container_div">
        <div v-for="p in list_tipo" class="contenedor">
            <img :src="'../../img/comidas/' + p.img" alt="">
            <h1> {{ p.name }} </h1>
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
            
        };

    },
    created() {
       
    },
    mounted() {
        
    },

    methods: {

        async index() {
            try {
                let response = await axios.post(`http://127.0.0.1:8000/api/ingrediente`);
                this.list_tipo = response.data.ingredientes
                

            } catch (e) {
                console.log(e)
            };
            console.log(this.list_tipo)

        },
        insertar(buscar) {
            let item = this.list_hambuguer.find(pro => pro.name == buscar)
            if (buscar != undefined) {
                // console.log(item.name)

                
            }

        }
    }
}
</script>


