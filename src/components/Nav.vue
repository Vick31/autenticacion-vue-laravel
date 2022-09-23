<template>
    <nav class="navbar bg-light" id="barra">
        <div class="container-fluid">
            <router-link to="/">
                <img src="/img/logo.png" alt="logo" width="100" height="100" class="d-inline-block align-text-top"
                    style="cursor:pointer">
            </router-link>

            <h1 id="title-nav" style="cursor:pointer">ComidApp</h1>

            <div class="icons_login">
                <div class="container-link">
                    <div>
                        <span @click="mostrar_btn()" class="material-symbols-outlined btn-nav-link link-btn"
                            data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            logout
                        </span>
                    </div>
                    <div>
                        <p class="link text-nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Iniciar sesion
                        </p>
                    </div>
                </div>

                <div class="container-link">
                    <router-link class=" btn-nav-link" to="/">
                        <span @click="mostrar_btn()" class="link-btn material-symbols-outlined">
                            home
                        </span>
                    </router-link>
                    <router-link class="link text-nav-link" to="/">
                        <p>Inicio</p>
                    </router-link>
                </div>

                <div class="container-link">
                    <router-link class="btn-nav-link" to="/register">
                        <span @click="mostrar_btn()" class="link-btn material-symbols-outlined">
                            how_to_reg
                        </span>
                    </router-link>
                    <router-link class="link text-nav-link" to="/register">
                        <p>Registrarse</p>
                    </router-link>
                </div>

                <span class="material-symbols-outlined" id="btn-menu" @click="mostrar_links()">menu</span>

            </div>

            <router-link v-if="this.$route.path == '/account'" class="link" to="/account">Tu cuenta</router-link>
        </div>
    </nav>
</template>

<style scoped>
@import "../assets/css/styleApp.css";
</style>

<script>
export default {
    data() {
        return {
            message: null,
            form: {
                email: "",
                password: "",
            },
            errors: {},
        };
    },
    mounted() {
        if (this.$route.params.message)
            this.message = this.$route.params.message

    },

    methods: {
        async login() {
            try {
                const rs = await this.axios.post("/api/login", this.form);
                this.$router.push({
                    name: 'Account',
                    //params: { token: rs.data.token, },
                });
                localStorage.token = rs.data.token
            }
            catch (e) {

                this.errors = {},
                    this.message = null;

                if (e.response.data.errors)
                    this.errors = e.response.data.errors;

                else if (e.response.data.message)
                    this.errors = e.response.data.message;

            }

        },
        mostrar_links() {
            let a = document.getElementsByClassName('btn-nav-link')
            for (let i = 0; i < a.length; i++) {
                a[i].style.transform = 'translatex(1em)'
            }

            document.getElementById('btn-menu').style.transform = 'scale(0)'
        },
        mostrar_btn() {
            let a = document.getElementsByClassName('btn-nav-link')
            for (let i = 0; i < a.length; i++) {
                a[i].style.transform = 'translate(12em)'
            }

            document.getElementById('btn-menu').style.transform = 'scale(1)'
        }
    },
};

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

</script>