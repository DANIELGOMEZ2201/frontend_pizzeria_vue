<template>
    <nav>
      <h1>Pizzería App</h1>
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/orders">Pedidos</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  