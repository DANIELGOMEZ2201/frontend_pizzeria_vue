<template>
    <div>
      <h1>Editar Pizza</h1>
      <form @submit.prevent="updatePizza">
        <div>
          <label for="name">Nombre</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <div>
          <label for="price">Precio</label>
          <input type="number" v-model="price" id="price" required />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        price: '',
      };
    },
    mounted() {
      const pizzaId = this.$route.params.id;
      this.name = `Pizza ${pizzaId}`;  // Corregido
      this.price = pizzaId * 10;       // Ejemplo para establecer el precio, debe ser modificado si tienes una lógica de precio real
    },
    methods: {
      updatePizza() {
        console.log('Pizza actualizada:', this.name, this.price);
        this.$router.push('/pizzas');
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  