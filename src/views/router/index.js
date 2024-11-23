import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';
import ForgotPassword from '../views/Auth/ForgotPassword.vue';
import Dashboard from '../views/Dashboard/Dashboard.vue';
import ClientList from '../views/Clients/ClientList.vue';
import ClientCreate from '../views/Clients/ClientCreate.vue';
import ClientEdit from '../views/Clients/ClientEdit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/forgot-password', name: 'forgot-password', component: ForgotPassword },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
    { path: '/clients', name: 'client-list', component: ClientList },
    { path: '/clients/create', name: 'client-create', component: ClientCreate },
    { path: '/clients/edit/:id', name: 'client-edit', component: ClientEdit },
  ],
});