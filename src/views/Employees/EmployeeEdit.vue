<template>
    <div>
      <h1>Editar Empleado</h1>
      <form @submit.prevent="updateEmployee">
        <div>
          <label for="name">Nombre</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <div>
          <label for="position">Puesto</label>
          <input type="text" v-model="position" id="position" required />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        position: '',
      };
    },
    mounted() {
      const employeeId = this.$route.params.id;
      // Corregir la interpolación con backticks
      this.name = `Empleado ${employeeId}`;
      this.position = `Puesto ${employeeId}`;
    },
    methods: {
      updateEmployee() {
        console.log('Empleado actualizado:', this.name, this.position);
        // Redirigir después de la actualización
        this.$router.push('/employees');
      },
    },
  };
  </script>
  
  <style scoped>
  
  