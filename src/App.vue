<template>
  <div id="app">
    <NavBar />
    <!-- v-if="isLoggedIn" -->
    <RouterView />
    <!-- <Products /> -->
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue' // Certifique-se de ajustar o caminho conforme necessário
export default {
  name: 'App',
  components: {
    NavBar
  },
  computed: {
    isLoggedIn() {
      // Verifica se há um token de autenticação no localStorage
      return localStorage.getItem('auth_token') !== null
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
