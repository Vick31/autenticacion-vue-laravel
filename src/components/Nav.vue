<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link to="/">
                <img src="/img/logo.png" alt="logo" width="100" height="100" class="d-inline-block align-text-top"
                    style="cursor:pointer">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">
                            <a class="nav-link active">Inicio</a>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="">
                            <a class="nav-link active" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Iniciar sesion</a>
                        </router-link>  
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/register">
                            <a class="nav-link active">Registrarse</a>
                        </router-link>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
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
    },
};


</script>