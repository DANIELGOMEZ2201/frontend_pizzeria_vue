<template>
    <div>
      <h1>Editar Ingrediente</h1>
      <form @submit.prevent="updateIngredient">
        <div>
          <label for="name">Nombre</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <div>
          <label for="quantity">Cantidad</label>
          <input type="number" v-model="quantity" id="quantity" required />
        </div>
        <div>
          <label for="unit">Unidad</label>
          <input type="text" v-model="unit" id="unit" required />
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
        quantity: '',
        unit: '',
      };
    },
    mounted() {
      const ingredientId = this.$route.params.id;
      this.name = `Ingrediente ${ingredientId}`;
      this.quantity = 10 * ingredientId;
      this.unit = 'kg';
    },
    methods: {
      updateIngredient() {
        console.log('Ingrediente actualizado:', this.name, this.quantity, this.unit);
        this.$router.push('/ingredients');
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
  