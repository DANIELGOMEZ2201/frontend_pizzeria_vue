<template>
    <div>
      <h2>Recuperar Contraseña</h2>
      <form>
        <label>Email</label>
        <input type="email" v-model="email" />
        <button @click.prevent="recoverPassword">Recuperar Contraseña</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: ''
      };
    },
    methods: {
      recoverPassword() {
        // Lógica para recuperar la contraseña
      }
    }
  };
  </script>
  