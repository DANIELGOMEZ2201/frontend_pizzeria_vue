<template>
    <div>
      <h1>Editar Pedido</h1>
      <form @submit.prevent="updateOrder">
        <div>
          <label for="client">Cliente</label>
          <input type="text" v-model="clientName" id="client" required />
        </div>
        <div>
          <label for="total">Total</label>
          <input type="number" v-model="total" id="total" required />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clientName: '',
        total: '',
      };
    },
    mounted() {
      const orderId = this.$route.params.id;
      this.clientName = `Cliente ${orderId}`;  // Corregido aquí
      this.total = (orderId * 10).toString(); // Solo para ejemplo
    },
    methods: {
      updateOrder() {
        console.log('Pedido actualizado:', this.clientName, this.total);
        this.$router.push('/orders');
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
  