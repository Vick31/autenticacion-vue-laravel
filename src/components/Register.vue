<style scoped>
@import "../assets/Css/styleRegister.css";  
</style>

<template>

    <h1> registrarse </h1>

    <form>
        <div>
            <input type="text" name="name" v-model="form.name" placeholder="Nombre" />
            <span v-if="errors.name">{{ errors.name[0] }}</span>
        </div>
        <br>
        <div>
            <input type="text" name="email" v-model="form.email" placeholder="Correo electronico" />
            <span v-if="errors.email">{{ errors.email[0] }}</span>
        </div>
        <br>
        <div>
            <input type="password" name="password" v-model="form.password"
                placeholder="Contraseña" />
            <span v-if="errors.password">{{ errors.password[0] }}</span>
        </div>
        <br>
        <div>
            <input type="password" name="password_confirmation" v-model="form.password_confirmation"
                placeholder="Confirmar Contraseña" />
            <span v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
        </div>
        <br>

        <div>
            <button @click="register_user()" type="button">Guardar</button>
        </div>
        <br>
        <p v-if="message">
            {{ message }}
        </p>
    </form>


</template>

<script>

export default {
    data() {
        return {
            message: '',
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
            errors: {},
        };
    },
    mounted() {
    },

    methods: {
        async register_user() {
            try {
                const rs = await this.axios.post("/api/register", this.form);

                this.$router.push({
                    name: 'Login',
                    params: { message: rs.data.message, },

                });
            }
            catch (e) {

                this.errors = {},
                    this.message = null;

                if (e.response.data.errors)
                    this.errors = e.response.data.errors;

                if (e.response.data.message)
                    this.errors = e.response.data.message;
                    
                console.log(e)
            }

        },
    },
};
</script>