<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <h2 class="title">Adicionar Produto</h2>
      <form class="formin" @submit.prevent="submitForm">
        <div class="inputdiv">
          <label for="name">Nome:</label>
          <input type="text" v-model="product.name" required />
        </div>
        <div class="inputdiv">
          <label for="price">Preço:</label>
          <input type="number" v-model="product.price" required />
        </div>
        <div class="inputdiv">
          <label for="type">Tipo:</label>
          <input type="text" v-model="product.type" required />
        </div>
        <div class="inputdiv">
          <label for="quantity">Quantidade:</label>
          <input type="number" v-model="product.quantity" required />
        </div>
        <div class="inputdiv">
          <label for="photo">Foto:</label>
          <input type="file" @change="handleFileUpload" />
        </div>
        <button class="savebutton" type="submit">Salvar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      product: {
        name: '',
        price: 0,
        type: '',
        quantity: 0,
        photo: null
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    handleFileUpload(event) {
      this.product.photo = event.target.files[0]
    },
    submitForm(e) {
      e.preventDefault()
      const name = this.product.name
      const price = this.price
      const type = this.type
      const quantity = this.quantity
      const photo = this.photo
      console.log('testandoo ' + name)

      this.$emit('close')
      // Apenas para fins de exibição; não faz nada no momento
    }
  }
}
</script>

<style>
.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #00040050;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 500px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.title {
  padding: 0;
}

.inputdiv {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 6px;
  justify-content: space-between;
}

input {
  border-radius: 6px;
  font-size: 20px;
}

.savebutton {
  margin: 6px;
  font-size: 20px;
  border-radius: 8px;
  background-color: #09e709fd;
}

.formin {
  text-align: left;
}
</style>
