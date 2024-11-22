<template>
    <div class="container">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight mb-4">
        Crear Nuevo Cliente
      </h2>
  
      <!-- Formulario de creación -->
      <form @submit.prevent="createClient">
        <div class="form-group">
          <label for="address">Dirección</label>
          <input
            type="text"
            id="address"
            v-model="client.address"
            class="form-control"
            placeholder="Dirección del cliente"
          />
        </div>
  
        <div class="form-group mt-3">
          <label for="phone">Teléfono</label>
          <input
            type="text"
            id="phone"
            v-model="client.phone"
            class="form-control"
            placeholder="Teléfono del cliente"
          />
        </div>
  
        <button type="submit" class="btn btn-primary mt-4">
          Crear Cliente
        </button>
      </form>
  
      <!-- Mensaje de éxito o error -->
      <div v-if="successMessage" class="alert alert-success mt-4">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="alert alert-danger mt-4">
        {{ errorMessage }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'NewClient',
    data() {
      return {
        client: {
          address: '',
          phone: '',
        },
        successMessage: '',
        errorMessage: '',
      };
    },
    methods: {
      // Método para crear un nuevo cliente
      createClient() {
        // Obtener el user_id del usuario autenticado
        const userId = 1; // Aquí puedes cambiarlo para usar el ID del usuario autenticado si estás trabajando con autenticación
  
        const clientData = {
          user_id: userId,
          address: this.client.address,
          phone: this.client.phone,
        };
  
        axios
          .post('http://127.0.0.1:8000/api/clients', clientData)
          .then((response) => {
            if (response.data.success) {
              this.successMessage = 'Cliente creado correctamente.';
              this.errorMessage = ''; // Limpiar mensaje de error
              this.client = { address: '', phone: '' }; // Limpiar formulario
            }
          })
          .catch((error) => {
            console.error('Error al crear el cliente:', error);
            this.errorMessage = 'Hubo un problema al crear el cliente.';
            this.successMessage = ''; // Limpiar mensaje de éxito
          });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el formulario y los mensajes */
  .container {
    max-width: 600px;
    margin-top: 50px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  </style>
  