<template>
    <div>
      <h1>Listado de Inventario</h1>
      <button @click="addInventory">Agregar Material</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Unidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in inventory" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.unit }}</td>
            <td>
              <button @click="editInventory(item.id)">Editar</button>
              <button @click="deleteInventory(item.id)">Eliminar</button>
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
        inventory: [
          { id: 1, name: 'Harina', quantity: 100, unit: 'kg' },
          { id: 2, name: 'Queso', quantity: 50, unit: 'kg' },
          { id: 3, name: 'Salsa', quantity: 30, unit: 'litros' },
        ],
      };
    },
    methods: {
      addInventory() {
        this.$router.push('/inventory/create');
      },
      editInventory(id) {
        this.$router.push(`/inventory/edit/${id}`);
      },
      deleteInventory(id) {
        this.inventory = this.inventory.filter(item => item.id !== id);
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

