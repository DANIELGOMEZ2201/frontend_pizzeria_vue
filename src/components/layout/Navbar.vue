<template>
    <nav>
      <h1>Pizzería App</h1>
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/orders">Pedidos</router-link></li>
        <li><router-link to="/clients">Clientes</router-link></li>
        <li><router-link to="/employees">Empleados</router-link></li>
        <li><router-link to="/inventory">Inventario</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
  }
  
  li {
    display: inline;
    margin-right: 15px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  