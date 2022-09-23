<template>
  <div>
    <router-view name="navbar"></router-view>
    <br><br>
    <div class="container-section">
      <div class="section">
        <router-view>
        </router-view>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Iniciar sesion</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div id="body-login">
            <div>
              <form id="form-login">
                <div class="form-floating pb-3">
                  <input type="email" class="form-control" id="floatingInput" name="email" v-model="form.email" />
                  <label for="floatingInput">Correo electronico</label>
                  <span class="errors-message" v-if="errors.email">{{ errors.email[0] }}</span>
                </div>

                <div class="form-floating pb-3">
                  <input type="password" class="form-control" id="floatingPassword" name="password"
                    v-model="form.password" />
                  <label for="floatingPassword">Password</label>
                  <span class="errors-message" v-if="errors.password">{{ errors.password[0] }} </span>
                </div>

                <button data-bs-dismiss="modal" style="border: none; background: none;" class="olvi">
                  <router-link to="/forgot-password" class="contra">¿Olvidaste tu contraseña?</router-link>
                </button>

                <p v-if="message">{{ message }}</p>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" @click="login()" data-bs-dismiss="modal" class="btn btn-primary btn-login"
            id="liveToastBtn">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small>Ahora</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Has iniciado seccion correctamente.
      </div>
    </div>
  </div>


</template>


<style scoped>
@import "../src/assets/css/styleApp.css";
@import "../src/assets/css/styleLogin.css";
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