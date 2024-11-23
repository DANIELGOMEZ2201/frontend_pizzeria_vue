<template>
    <div>
      <h1>Editar Proveedor</h1>
      <form @submit.prevent="updateSupplier">
        <div>
          <label for="name">Nombre</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <div>
          <label for="phone">Teléfono</label>
          <input type="text" v-model="phone" id="phone" required />
        </div>
        <div>
          <label for="address">Dirección</label>
          <input type="text" v-model="address" id="address" required />
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
        phone: '',
        address: '',
      };
    },
    mounted() {
      const supplierId = this.$route.params.id;
      this.name = `Proveedor ${supplierId}`;
      this.phone = '123456789';
      this.address = `Dirección ${supplierId}`;
    },
    methods: {
      updateSupplier() {
        console.log('Proveedor actualizado:', this.name, this.phone, this.address);
        this.$router.push('/suppliers');
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
  