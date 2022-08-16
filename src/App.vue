<template>
  <router-link class="link" to="/login">Acceder</router-link>
  <br><br>
  <router-link class="link" to="/register">Registrarse</router-link>
  <br><br>
  <router-link v-if="this.$route.path == '/account'" class="link" to="/account">Tu cuenta</router-link>
  <br><br>
  <div class="container">
    <router-view>
    </router-view>
  </div>

</template>