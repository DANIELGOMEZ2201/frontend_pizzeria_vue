<template>
    <div>
      <h1>Listado de Ingredientes</h1>
      <button @click="addIngredient">Agregar Ingrediente</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad Disponible</th>
            <th>Unidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ingredient in ingredients" :key="ingredient.id">
            <td>{{ ingredient.name }}</td>
            <td>{{ ingredient.quantity }}</td>
            <td>{{ ingredient.unit }}</td>
            <td>
              <button @click="editIngredient(ingredient.id)">Editar</button>
              <button @click="deleteIngredient(ingredient.id)">Eliminar</button>
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
        ingredients: [
          { id: 1, name: 'Tomate', quantity: 100, unit: 'kg' },
          { id: 2, name: 'Queso', quantity: 50, unit: 'kg' },
        ],
      };
    },
    methods: {
      addIngredient() {
        this.$router.push('/ingredients/create');
      },
      editIngredient(id) {
        this.$router.push(`/ingredients/edit/${id}`);
      },
      deleteIngredient(id) {
        this.ingredients = this.ingredients.filter(ingredient => ingredient.id !== id);
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
  