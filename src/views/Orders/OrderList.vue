<template>
    <div>
      <h1>Listado de Pedidos</h1>
      <button @click="addOrder">Agregar Pedido</button>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Estado</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.clientName }}</td>
            <td>{{ order.status }}</td>
            <td>{{ order.total }}</td>
            <td>
              <button @click="editOrder(order.id)">Editar</button>
              <button @click="deleteOrder(order.id)">Eliminar</button>
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
        orders: [
          { id: 1, clientName: 'Juan Pérez', status: 'Pendiente', total: '$30' },
          { id: 2, clientName: 'María López', status: 'Completado', total: '$45' },
        ],
      };
    },
    methods: {
      addOrder() {
        this.$router.push('/orders/create');
      },
      editOrder(id) {
        this.$router.push(`/orders/edit/${id}`); // Corregido aquí
      },
      deleteOrder(id) {
        this.orders = this.orders.filter(order => order.id !== id);
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
  