<template>
    <div class="container">
      <h2 class="font-semibold text-xl text-gray-800 leading-tight mb-4">
        Editar Cliente
      </h2>
  
      <!-- Formulario de edición -->
      <form @submit.prevent="updateClient">
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
          Guardar Cambios
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
    name: 'EditClient',
    data() {
      return {
        client: {
          id: null,
          address: '',
          phone: '',
        },
        successMessage: '',
        errorMessage: '',
      };
    },
    methods: {
      // Método para obtener los datos del cliente
      fetchClientData() {
        const clientId = this.$route.params.id; // Obtener el ID del cliente desde los parámetros de la ruta
        axios
          .get(`http://127.0.0.1:8000/api/clients/${clientId}`)
          .then((response) => {
            this.client = response.data.client; // Asigna los datos del cliente al objeto `client`
          })
          .catch((error) => {
            console.error('Error al obtener los datos del cliente:', error);
            this.errorMessage = 'No se pudo obtener los datos del cliente.';
          });
      },
  
      // Método para actualizar los datos del cliente
      updateClient() {
        const clientId = this.$route.params.id; // Obtener el ID del cliente desde los parámetros de la ruta
        axios
          .put(`http://127.0.0.1:8000/api/clients/${clientId}`, this.client)
          .then((response) => {
            if (response.data.success) {
              this.successMessage = 'Cliente actualizado correctamente.';
              this.errorMessage = ''; // Limpiar mensaje de error
            }
          })
          .catch((error) => {
            console.error('Error al actualizar el cliente:', error);
            this.errorMessage = 'Hubo un problema al actualizar los datos del cliente.';
            this.successMessage = ''; // Limpiar mensaje de éxito
          });
      },
    },
    mounted() {
      this.fetchClientData(); // Cargar los datos del cliente al montar el componente
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el formulario y mensajes */
  .container {
    max-width: 600px;
    margin-top: 50px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  </style>
  