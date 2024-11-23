<template>
    <aside>
      <ul>
        <li><router-link to="/clients">Clientes</router-link></li>
        <li><router-link to="/employees">Empleados</router-link></li>
        <li><router-link to="/inventory">Inventario</router-link></li>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
  };
  </script>
  