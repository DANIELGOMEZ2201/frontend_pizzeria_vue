<template>
    <div>
      <h1>Panel de Control</h1>
      <p>Bienvenido al panel de control de la Pizzería App</p>
      <div>
        <router-link to="/clients">Ver Clientes</router-link>
        <router-link to="/orders">Ver Pedidos</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  </style>
  