<template>
    <h1>
        Login
    </h1>
    <div>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <span v-if="errors.email">{{ errors.email[0] }}</span>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <span v-if="errors.password">{{ errors.password[0] }}</span>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <router-link to="forgot-password">Olvidaste tu Contraseña</router-link>
            <p v-if="message">
                {{ message }}
            </p><br>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <form class="form-login">
            <div>
                <label for="">Email</label>
                <input type="text" name="email" v-model="form.email" />
                
            </div>
            <br>

            <div>
                <label for="">Contraseña</label>
                <input type="password" name="password" v-model="form.password" />
                
            </div>
            <br>

            <div>
                <button @click="login()" type="button">Login</button>
            </div>
            <br>
            
        </form>
    </div>
</template>


<style scoped>
@import "../assets/css/styleLogin.css";
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

                if (e.response.data.message)
                    this.errors = e.response.data.message;

            }

        },
    },
};
</script>