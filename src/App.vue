<template>
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
      Bootstrap
    </a>
  </div>

  <router-link class="link" to="/login">Acceder</router-link>
  <br><br>
  <router-link class="link" to="/register">Registrarse</router-link>
  <br><br>
  <router-link v-if="this.$route.path == '/account'" class="link" to="/account">Tu cuenta</router-link>
  </nav>
  <br><br>
  <div class="container">
    <router-view>
    </router-view>
  </div>
  

</template>