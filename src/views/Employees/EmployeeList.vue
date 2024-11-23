<template>
    <div>
      <h1>Listado de Empleados</h1>
      <button @click="addEmployee">Agregar Empleado</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.position }}</td>
            <td>
              <button @click="editEmployee(employee.id)">Editar</button>
              <button @click="deleteEmployee(employee.id)">Eliminar</button>
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
        employees: [
          { id: 1, name: 'Carlos Gómez', position: 'Cocinero' },
          { id: 2, name: 'Ana Ruiz', position: 'Mesera' },
        ],
      };
    },
    methods: {
      addEmployee() {
        this.$router.push('/employees/create');
      },
      editEmployee(id) {
        this.$router.push(`/employees/edit/${id}`);  // Corrige la interpolación de cadenas
      },
      deleteEmployee(id) {
        this.employees = this.employees.filter(employee => employee.id !== id);
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
  