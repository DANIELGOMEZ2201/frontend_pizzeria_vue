<template>
    <div>
      <h1>Listado de Clientes</h1>
      <button @click="addClient">Agregar Cliente</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client.id">
            <td>{{ client.name }}</td>
            <td>{{ client.email }}</td>
            <td>
              <button @click="editClient(client.id)">Editar</button>
              <button @click="deleteClient(client.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clients: [
          { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
          { id: 2, name: 'María López', email: 'maria@example.com' },
        ],
      };
    },
    methods: {
      addClient() {
        this.$router.push('/clients/create');
      },
      editClient(id) {
        this.$router.push(`/clients/edit/${id}`);
      },
      deleteClient(id) {
        this.clients = this.clients.filter(client => client.id !== id);
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    padding: 8px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>

