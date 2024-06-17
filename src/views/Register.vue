<template>
  <div class="divform">
    <h2>{{ isRegister ? 'Registrar' : 'Login' }}</h2>
    <form @submit.prevent="submitForm">
      <input v-model="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Senha" required />
      <input v-if="isRegister" v-model="name" placeholder="Nome" required />
      <input
        v-if="isRegister"
        v-model="password_confirmation"
        type="password"
        placeholder="Confirme a Senha"
        required
      />

      <button type="submit">{{ isRegister ? 'Registrar' : 'Login' }}</button>
    </form>

    <button @click="toggleMode">
      {{ isRegister ? 'Já tem uma conta? Faça login.' : 'Não tem uma conta? Registre-se.' }}
    </button>
  </div>
</template>

<script>
import api from '../axios'

export default {
  data() {
    return {
      email: '',
      password: '',
      name: '', // Add name field for registration
      password_confirmation: '', // Add password confirmation field for registration
      isRegister: false // Initialize isRegister to false for login mode
    }
  },
  methods: {
    submitForm() {
      if (this.isRegister) {
        this.register()
      } else {
        this.login()
      }
    },
    toggleMode() {
      this.isRegister = !this.isRegister
    },
    async registro() {
      try {
        const response = await api.post('/cadastro', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
        localStorage.setItem('token', response.data.token)
        this.$router.push({ name: 'Login' })
      } catch (error) {
        alert('Cadastro falhou')
        console.error('Erro:', error)
      }
    },
    async login() {
      try {
        const response = await api.post('/login', {
          email: this.email,
          password: this.password
        })
        localStorage.setItem('token', response.data)
        this.$router.push({ name: 'Produtos' })
      } catch (error) {
        alert('Login failed')
        console.error('Error:', error)
      }
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 50px;
}

form {
  display: flex;
  flex-direction: column;
}

.divform {
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
}

input {
  margin-bottom: 10px;
}

button {
  margin-bottom: 10px;
  background-color: #0d9bb4;
  border-radius: 5px;
  font-size: 16px;
  min-width: 300px;
}
</style>
