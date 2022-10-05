<template>

    <div class="container_empresa">

        <div class="mapas">
            <div>
                <iframe class="maps"
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2303.8923872806686!2d-75.59563870111862!3d1.6288451132891066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8e2451f51faf07c5%3A0x3e70f4efd3e1d405!2sRANCHO%20BURGER%2C%20Cl%2016%2C%20Florencia%2C%20Caquet%C3%A1!3m2!1d1.6289311!2d-75.59517439999999!5e0!3m2!1ses!2sco!4v1661783624907!5m2!1ses!2sco"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="description-company">
                <p> {{company.address}} </p>
                <p> {{company.phone}} </p>
            </div>

            <div class="company">
                <h4> {{ company.name }} </h4>
                <img :src="company.logo" alt="">
            </div>
        </div>

        <div class="container-products">

            <h2>Elige tu comida</h2>

            <div class="products">

                <div class="empresa button" v-for="p in list_hambuguer">


                    <div class="div-img">
                        <img src="../../img/comidas/img1.jpg" alt="">
                    </div>

                    <div class="content">
                        <h5>{{ p.name }}</h5>
                        <small>${{ p.price }} COP</small>

                        <router-link class="links" to="/select/topings">
                            <span @click="insertar(p.name)">Añadir a la bolsa</span>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div v-for="item in fatura" class="modal-body">
                    <div>
                        <small>
                            <b>{{ item.name }}</b>
                        </small>
                        <small>
                            $ {{item.price}} COP
                        </small>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
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
            fatura: [],
            company: {
                name: '',
                image: '',
                id: '',
            },
        };
    },


    created() {

    },
    async mounted() {
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
                console.log(item)
                this.fatura.push(item)
                localStorage.setItem('type', item.name)
            }

        }
    }
}

</script>


