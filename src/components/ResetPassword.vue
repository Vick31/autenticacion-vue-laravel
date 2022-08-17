<template>
    <h1>
        Cambiar contraseña
    </h1>
    <div>
        <form>
            <div>
                <input type="text" name="email" v-model="form.email" placeholder="email" />
                <span v-if="errors.email">{{ errors.email[0] }}</span>
            </div>
            <br>
            <div>
                <input type="password" name="password" v-model="form.password" placeholder="nueva contraseña" />
                <span v-if="errors.email">{{ errors.password[0] }}</span>
            </div>
            <br>
            <div>
                <input type="password" name="password_confirmation" v-model="form.password_confirmation"
                    placeholder="Confirmar Contraseña" />
                <span v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
            </div>
            <br>

            <div>
                <button @click="change_password()" type="button">Guardar</button>
            </div>
            <br>
            <p v-if="message">
                {{ message }}
            </p>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            message: '',
            form: {
                email: "",
                password: "",
                token: '',
            },
            errors: {},
        };
    },
    mounted() {
        if (this.$route.query.token)
            this.form.token = this.$route.query.token
    },

    methods: {
        async change_password() {
            try {
                const rs = await this.axios.post("/api/reset-password", this.form);

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
            }

        },
    },
};
</script>