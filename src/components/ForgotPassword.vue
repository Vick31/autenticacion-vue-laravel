<template>

    <form action=""
         style="display: flex; flex-direction: column; align-items: center; font-family:Arial, Helvetica, sans-serif;">
        <h2>
            Confirmacion de correo
        </h2>
        <input type="text" name="email" v-model="email" placeholder="Correo electronico"
            style="padding: 0.5em; font-size:18px; margin: 0.3em;">

        <span v-if="errors.email">{{ errors.email[0] }}</span>

        <button type="button"
            @click="send_email()"
            style="font-size:16px; background-color: blue; color: white; border-radius: 10px; border: none; padding: 0.5em;">

            Confirmar

        </button>
        <span v-if="message">{{ message }}</span>
    </form>

</template>

<script>

export default {
    data() {
        return {
            message: null,
            email: "",
            errors: {},
        };
    },
    mounted() {
    },

    methods: {
        async send_email() {
            try {
                
                const rs = await this.axios.post("/api/forgot-password", {email: this.email});
                console.log('correcto')
                this.$router.push({
                    name: 'Login',
                    params: { message: rs.data.message, },
                    
                });
                console.log('correcto')
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