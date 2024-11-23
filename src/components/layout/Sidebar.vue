<template>
    <aside>
      <ul>
        <li><router-link to="/clients">Clientes</router-link></li>
        <li><router-link to="/employees">Empleados</router-link></li>
        <li><router-link to="/inventory">Inventario</router-link></li>
        <li><router-link to="/orders">Pedidos</router-link></li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  aside {
    background-color: #f4f4f4;
    padding: 20px;
    width: 200px;
  }
  
  ul {
    list-style-type: none;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  a {
    color: #333;
    text-decoration: none;
  }
  </style>
  