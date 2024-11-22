<template>
    <div class="container">
      <!-- Título y botón para agregar cliente -->
      <div class="d-flex justify-content-between mb-4">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
          Clientes
        </h2>
        <button @click="newClient" class="btn btn-primary">
          Agregar Cliente
        </button>
      </div>
  
      <!-- Mensaje de éxito -->
      <div v-if="successMessage" class="alert alert-success">
        {{ successMessage }}
      </div>
  
      <!-- Tabla de clientes -->
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(client, index) in clients" :key="client.id">
            <td>{{ client.id }}</td>
            <td>{{ client.name }}</td>
            <td>{{ client.address }}</td>
            <td>{{ client.phone }}</td>
            <td>
              <!-- Botones de editar y eliminar -->
              <button @click="editClient(client.id)" class="btn btn-warning mx-2">
                Editar
              </button>
              <button @click="deleteClient(client.id)" class="btn btn-danger mx-2">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Clients',
    data() {
      return {
        clients: [], // Lista de clientes
        successMessage: '', // Mensaje de éxito
      };
    },
    methods: {
      // Método para agregar un nuevo cliente
      newClient() {
        this.$router.push({ name: 'NewClient' }); // Redirige a la vista de creación de cliente
      },
  
      // Método para editar un cliente existente
      editClient(id) {
        this.$router.push({ name: 'EditClient', params: { id: id } }); // Redirige a la vista de edición de cliente
      },
  
      // Método para eliminar un cliente
      deleteClient(id) {
        if (confirm(`¿Estás seguro de eliminar al cliente con ID ${id}?`)) {
          axios
            .delete(`http://127.0.0.1:8000/api/clients/${id}`) // Llamada DELETE al backend
            .then((response) => {
              if (response.data.success) {
                this.successMessage = 'Cliente eliminado correctamente.';
                this.fetchClients(); // Actualiza la lista de clientes
              }
            })
            .catch((error) => {
              console.error('Error al eliminar el cliente:', error);
              alert('No se pudo eliminar el cliente.');
            });
        }
      },
  
      // Método para obtener la lista de clientes
      fetchClients() {
        axios
          .get('http://127.0.0.1:8000/api/clients') // Llamada GET al backend
          .then((response) => {
            this.clients = response.data.clients; // Asigna la lista de clientes obtenida
          })
          .catch((error) => {
            console.error('Error al obtener los clientes:', error);
          });
      },
    },
    mounted() {
      this.fetchClients(); // Carga los clientes al montar el componente
    },
  };
  </script>
  
  <style scoped>
  /* Agrega estilos personalizados si es necesario */
  </style>
  