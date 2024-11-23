<template>
    <div>
      <h1>Editar Cliente</h1>
      <form @submit.prevent="updateClient">
        <div>
          <label for="name">Nombre</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" required />
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
        email: '',
      };
    },
    mounted() {
      // Simulando carga de cliente
      const clientId = this.$route.params.id;
      this.name = `Cliente ${clientId}`;
      this.email = `cliente${clientId}@example.com`;
    },
    methods: {
      updateClient() {
        console.log('Cliente actualizado:', this.name, this.email);
        this.$router.push('/clients');
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
  