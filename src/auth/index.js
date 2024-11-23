// src/auth/index.js
import axios from 'axios';
import router from '../router'; // Asegúrate de que la ruta de tu router sea correcta

export const auth = {
  login,
  logout,
  register,
  getCurrentUser,
  isLoggedIn,
};

const API_URL = 'http://localhost:8000/api'; // Cambia la URL al endpoint correcto de tu API

// Función para iniciar sesión
function login(email, password) {
  return axios
    .post(`${API_URL}/login`, { email, password })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

// Función para cerrar sesión
function logout() {
  localStorage.removeItem('user');
  router.push('/login');
}

// Función para registrar un nuevo usuario (empleado o cliente)
function register(name, email, password) {
  return axios
    .post(`${API_URL}/register`, { name, email, password })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
}

// Función para obtener el usuario actual
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

// Función para verificar si el usuario está logueado
function isLoggedIn() {
  const user = getCurrentUser();
  return user && user.token ? true : false;
}
