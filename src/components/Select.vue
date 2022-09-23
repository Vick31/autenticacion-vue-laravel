<template>

    <div class="container_empresa">
        <div>
            <h4> {{ company.name }} </h4>
            <br>
            <h2>Elige tu comida</h2>
            <div>
                <div class="empresa button" v-for="p in list_hambuguer" @click="buscar(p.name)">
                    <div class="card">
                        <img src="../../img/f.elconfidencial.com_original_cd5_15e_c44_cd515ec44327e3f273fd91e12098d635.jpg"
                            alt="">
                        <h4>{{ p.name }}</h4>
                        <h4>${{ p.price }} COP</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="maps">
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2303.8923872806686!2d-75.59563870111862!3d1.6288451132891066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8e2451f51faf07c5%3A0x3e70f4efd3e1d405!2sRANCHO%20BURGER%2C%20Cl%2016%2C%20Florencia%2C%20Caquet%C3%A1!3m2!1d1.6289311!2d-75.59517439999999!5e0!3m2!1ses!2sco!4v1661783624907!5m2!1ses!2sco"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>
<style scoped>
@import "../assets/css/styleSelect.css";
</style>


<script>
import { ssrContextKey } from 'vue';



export default {
    data() {
        return {
            list_hambuguer: [],
            company: {
                name: '',
                image: '',
                id: '',
            },
        };
    },


    created() {

    },
    mounted() {
        this.company = JSON.parse(localStorage.getItem('company')); //JSON.parse convierte un string en objeto
        console.log(this.company)
        this.index();
    },

    methods: {

        async index() {
            try {
                let response = await axios.post(`http://127.0.0.1:8000/api/company-articles/${this.company.id}`);
                this.list_hambuguer = response.data.article_list

            } catch (e) {
                console.log(e)
            };

        },
        insertar(buscar) {
            let item = this.list_hambuguer.find(pro => pro.name == buscar)
            if (buscar != undefined) {
                // console.log(item.name)

                localStorage.setItem('type', item.name)
            }

        }
    }
}

</script>


