<template>
<nav class="navbar bg-light" id="barra">
  <div class="container-fluid">
     <img src="/img/logo.png" alt="logo" width="100" height="100" class="d-inline-block align-text-top">
      
      <h2>ComidApp</h2>
    
  
<div class="icons_login">
  <router-link class="link" to="/login">Acceder</router-link>  
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
  
  

</template>
<style scoped>
    @import "../src/assets/css/styleApp.css";
  </style>