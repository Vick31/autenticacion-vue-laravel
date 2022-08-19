<template>
  <h1>Iniciar sesion</h1>
  <br>
  <div>
    <form id="te">
      <div class="form-floating pb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email"
          v-model="form.email" />
        <label for="floatingInput">Correo electronico</label>
        <span class="errors-message" v-if="errors.email">{{ errors.email[0] }}</span>
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" id="floatingInput" placeholder="contraseña" name="password"
          v-model="form.password" />
        <span class="errors-message" v-if="errors.password">{{ errors.password[0] }} </span>
      </div>
      <button type="button" @click="login()" class="btn btn-primary">
        Reenviar correo
      </button>
      <br>
      <br>
      <router-link to="/forgot-password">
        ¿Olvidaste la contraseña?
      </router-link>
      <p v-if="message">{{ message }}</p>
    </form>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
}

.errors-message {
  color: red;
  margin: 0.5rem 0 0.5rem 0;
  text-align: center;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: aliceblue;
}
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