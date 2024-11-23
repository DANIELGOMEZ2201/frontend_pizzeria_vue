<template>
    <div>
      <h1>Listado de Pizzas</h1>
      <button @click="addPizza">Agregar Pizza</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pizza in pizzas" :key="pizza.id">
            <td>{{ pizza.name }}</td>
            <td>{{ pizza.price }}</td>
            <td>
              <button @click="editPizza(pizza.id)">Editar</button>
              <button @click="deletePizza(pizza.id)">Eliminar</button>
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
        pizzas: [
          { id: 1, name: 'Margarita', price: '$12' },
          { id: 2, name: 'Pepperoni', price: '$15' },
        ],
      };
    },
    methods: {
      addPizza() {
        this.$router.push('/pizzas/create');
      },
      editPizza(id) {
        this.$router.push(`/pizzas/edit/${id}`); // Corregido aquí
      },
      deletePizza(id) {
        this.pizzas = this.pizzas.filter(pizza => pizza.id !== id);
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
  