<template>
    <h1>Mi Perfil </h1>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Created at: {{ user.created_at }}</p>
    <button @click="logout()">Cerrar sesión</button>
</template>

<script>
export default {
    data() {
        return {
            token: null,
            user: {},
        }
    },
    mounted() {
        if (localStorage.token) {
            this.token = localStorage.token;
            this.get_user();
        } else{
            this.$router.push({
                name: "Login",
                params: {
                    message:
                }
            })
        }

    },
    methods: {
        async get_user() {

            try {
                const rs = await this.axios.get('/api/user', {
                    headers: { Authorization: `Bearer ${this.token}` },
                });
                this.user = rs.data.user;

            }

            catch (e) {
                this.$router.push({
                    name: "Login",
                    params: {
                        message: "No estas autorizado para acceder con esta cuenta"
                    }
                })
            }
        },

        async logout() {
            try {

                const rs = await this.axios.get("/api/logout", {
                    headers: { Authorization: `Bearer ${this.token}` },
                });

                localStorage.clear();

                this.$router.push ({

                        name: "Login",
                        params: {
                            message: rs.data.message,
                        },
                });
            } catch (e) {
                // console.log(e)
            }
        }
    },
}
</script>