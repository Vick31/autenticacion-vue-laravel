<template>
  <nav class="navbar bg-light" id="barra">
    <div class="container-fluid">
      <img src="/img/logo.png" alt="logo" width="100" height="100" class="d-inline-block align-text-top">

      <h2>ComidApp</h2>


      <div class="icons_login">
        

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Login
        </button>
        <router-link class="link" to="/home">inicio</router-link>
        <router-link class="link" to="/register">Registrarse</router-link>
      </div>

      <router-link v-if="this.$route.path == '/account'" class="link" to="/account">Tu cuenta</router-link>
    </div>
  </nav>
  <br><br>
  <div class="container">
    <router-view>
    </router-view>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div id="body-login">
            <div>
              <h1>Iniciar sesion</h1>
              <form id="form-login">
                <div class="form-floating pb-3">
                  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                    name="email" v-model="form.email" />
                  <label for="floatingInput">Correo electronico</label>
                  <span class="errors-message" v-if="errors.email">{{ errors.email[0] }}</span>
                </div>

                <div class="form-floating pb-3">
                  <input type="password" class="form-control" id="floatingPassword" placeholder="contraseña"
                    name="password" v-model="form.password" />
                  <label for="floatingPassword">Password</label>
                  <span class="errors-message" v-if="errors.password">{{ errors.password[0] }} </span>
                </div>
                <router-link to="/forgot-password">
                  ¿Olvidaste la contraseña?
                </router-link>
                <p v-if="message">{{ message }}</p>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" @click="login()" data-bs-dismiss="modal" class="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>


</template>
<style scoped>
@import "../src/assets/css/styleApp.css";
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