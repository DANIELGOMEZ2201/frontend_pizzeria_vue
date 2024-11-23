<template>
    <div class="auth-page">
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Correo electrónico" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        console.log("Iniciar sesión con:", this.email, this.password);
        // Lógica para autenticación
      },
    },
  };
  </script>