<template>
  <div>
    <h1>Lista de Produtos</h1>
    <div v-if="products.length === 0">
      <p>Nenhum produto registrado</p>
    </div>
    <div v-else class="product-list">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
        @mouseover="hoveredProduct = product.id"
        @mouseleave="hoveredProduct = null"
      >
        <template v-if="hoveredProduct === product.id">
          <img :src="product.photoUrl" alt="Foto do produto" class="product-photo" />
          <h2>{{ product.name }}</h2>
          <button class="Edbutton" @click="(showForm = true), editProduct(product.id)">
            Editar
          </button>
          <button class="Exbutton" @click="deleteProduct(product.id)">Excluir</button>
        </template>
        <template v-else>
          <img :src="product.photoUrl" alt="Foto do produto" class="product-photo" />
          <h2>{{ product.name }}</h2>
          <p>Preço: {{ product.price }}</p>
          <p>Tipo: {{ product.type }}</p>
          <p>Quantidade: {{ product.quantity }}</p>
        </template>
      </div>
    </div>
    <Form :show="showForm" @close="showForm = false"></Form>
  </div>
</template>
<script>
import Form from '../components/Form.vue'
export default {
  name: 'Products',
  components: {
    Form
  },
  data() {
    return {
      products: [],
      hoveredProduct: null,
      showForm: false
    }
  },
  created() {
    // Buscar os produtos da API (não funcional)
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      // Dados estáticos para apresentação
      this.products = [
        {
          id: 1,
          name: 'Produto 1',
          price: 10.0,
          type: 'Tipo 1',
          quantity: 5,
          photoUrl: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          name: 'Produto 2',
          price: 20.0,
          type: 'Tipo 2',
          quantity: 10,
          photoUrl: 'https://via.placeholder.com/150'
        }
      ]
    },
    editProduct(productId) {
      console.log('Editar produto com ID:', productId)
    },
    deleteProduct(productId) {
      console.log('Excluir produto com ID:', productId)
    }
  }
}
</script>
<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  text-align: center;
  position: relative;
}

.product-photo {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.Exbutton {
  display: inline;
  margin: 30px auto;
  padding: 10px 15px;
  border: none;
  background-color: #da1414;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.Exbutton:hover {
  background-color: #c53d1b;
}

.Edbutton {
  display: inline;
  margin: 30px 5px 0 0;
  padding: 10px 15px;
  border: none;
  background-color: #2a07f1;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.Edbutton:hover {
  background-color: #361cce;
}
</style>
