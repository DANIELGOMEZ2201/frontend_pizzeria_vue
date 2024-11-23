<template>
    <div>
      <h1>Listado de Proveedores</h1>
      <button @click="addSupplier">Agregar Proveedor</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="supplier in suppliers" :key="supplier.id">
            <td>{{ supplier.name }}</td>
            <td>{{ supplier.phone }}</td>
            <td>{{ supplier.address }}</td>
            <td>
              <button @click="editSupplier(supplier.id)">Editar</button>
              <button @click="deleteSupplier(supplier.id)">Eliminar</button>
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
        suppliers: [
          { id: 1, name: 'Proveedor A', phone: '123456789', address: 'Dirección 1' },
          { id: 2, name: 'Proveedor B', phone: '987654321', address: 'Dirección 2' },
        ],
      };
    },
    methods: {
      addSupplier() {
        this.$router.push('/suppliers/create');
      },
      editSupplier(id) {
        this.$router.push(`/suppliers/edit/${id}`);
      },
      deleteSupplier(id) {
        this.suppliers = this.suppliers.filter(supplier => supplier.id !== id);
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
  