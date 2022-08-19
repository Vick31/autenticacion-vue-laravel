<template>
  <h1>Mi perfil</h1>
  <p>Name: {{ user.name }}</p>
  <p>Email: {{ user.email }}</p>
  <p>created_at: {{ user.created_at }}</p>

  <button type="button" @click="logout()">Cerrar sesion</button>
</template>

<script>
export default {
  data() {
    return {
      token: null,
      user: {},
    };
  },
  mounted() {
    // if (localStorage.token) 
      if (localStorage.getItem("token")){
      // this.token = localStorage.token;
      this.token = localStorage.getItem("token");
      this.get_user();
    } else {
      this.$router.push({
        name: "login",
        params: {
          message: "no estas autorizado para acceder a esta cuenta.",
        },
      });
    }
  },

  methods: {
    async get_user() {
      try {
        console.log(this.token);

        const rs = await this.axios.get("/api/user", {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.user = rs.data.user;
      } catch (e) {
        this.$router.push({
          name: "login",
          params: {
            message: " No estas autorizado para acceder a esta cuenta.",
          },
        });
      }
    },

    async logout() {
      try {
        const rs = await this.axios.get("api/logout", {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        localStorage.clear();

        this.$router.push({
          name: "login",
          params: {
            message: rs.data.message,
          },
        });
      } catch (e) {
         this.$router.push({
          name: "login",
          params: {
            message: e.response.data.message,
          },
        });
      }
    },
  },
};
</script>