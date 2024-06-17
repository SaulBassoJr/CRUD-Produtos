<template>
  <div>
    <nav>
      <button @click="showForm = true">Inserir Produto</button>
      <router-link class="main_action" to="/produtos">Produtos</router-link>
      <router-link class="main_action" to="/">Logout</router-link>
    </nav>
    <Form :show="showForm" @close="showForm = false"></Form>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Form from './Form.vue'

export default {
  name: 'NavBar',
  components: {
    Form
  },
  data() {
    return {
      showForm: false
    }
  }
}
</script>

<style>
nav {
  /* background-color: #c8cbcc;
  overflow: hidden;
  margin: 0;
  height: 60px;
  align-content: center;
  text-align: center; */
  display: flex;
  justify-content: flex-start;
  background-color: #c8cbcc;
  border-bottom: 5px solid #000;
  padding: 10px 20px;
}

nav button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px;
  margin-right: 30px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  font-size: 15px;
}

nav button:hover {
  background-color: #45a049;
}

.main_action {
  display: inline-flex;
  align-items: center;
  color: #828282;
  font-size: 20px;
  text-decoration: none;
  margin-right: 30px;
}
.main_action::before {
  content: '';
  background-color: #828282;
  width: 10px;
  height: 10px;
  margin-right: 10px;
}

.main_action:hover {
  color: #000;
  cursor: pointer;
}

@media (max-width: 980px) {
  .main_action:hover {
    color: #828282;
  }
}
</style>
