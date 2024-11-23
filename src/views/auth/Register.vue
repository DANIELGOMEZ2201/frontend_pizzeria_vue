<template>
    <div>
      <h2>Registro de Usuario</h2>
      <form>
        <label>Nombre</label>
        <input type="text" v-model="name" />
        <label>Email</label>
        <input type="email" v-model="email" />
        <label>Contraseña</label>
        <input type="password" v-model="password" />
        <button @click.prevent="register">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        // Lógica de registro aquí
      }
    }
  };
  </script>
  