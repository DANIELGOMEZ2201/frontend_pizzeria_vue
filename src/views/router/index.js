import { createRouter, createWebHistory } from 'vue-router';


// Importar vistas de autenticación
import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';
import ForgotPassword from '@/views/auth/ForgotPassword.vue';

// Importar vistas del dashboard
import Dashboard from '@/views/Dashboard/Dashboard.vue';

// Importar vistas de clientes
import ClientList from '@/views/Clients/ClientList.vue';
import ClientCreate from '@/views/Clients/ClientCreate.vue';
import ClientEdit from '@/views/Clients/ClientEdit.vue';

// Importar vistas de empleados
import EmployeeList from '@/views/Employees/EmployeeList.vue';
import EmployeeCreate from '@/views/Employees/EmployeeCreate.vue';
import EmployeeEdit from '@/views/Employees/EmployeeEdit.vue';

// Importar vistas de pedidos
import OrderList from '@/views/Orders/OrderList.vue';
import OrderCreate from '@/views/Orders/OrderCreate.vue';
import OrderEdit from '@/views/Orders/OrderEdit.vue';

// Importar vistas de pizzas
import PizzaList from '@/views/Pizzas/PizzaList.vue';
import PizzaCreate from '@/views/Pizzas/PizzaCreate.vue';
import PizzaEdit from '@/views/Pizzas/PizzaEdit.vue';

// Importar vistas de ingredientes
import IngredientList from '@/views/Ingredients/IngredientList.vue';
import IngredientCreate from '@/views/Ingredients/IngredientCreate.vue';
import IngredientEdit from '@/views/Ingredients/IngredientEdit.vue';

// Importar vistas de proveedores
import SupplierList from '@/views/Suppliers/SupplierList.vue';
import SupplierCreate from '@/views/Suppliers/SupplierCreate.vue';
import SupplierEdit from '@/views/Suppliers/SupplierEdit.vue';

// Importar vistas de inventario
import InventoryList from '@/views/Inventory/InventoryList.vue';
import InventoryCreate from '@/views/Inventory/InventoryCreate.vue';
import InventoryEdit from '@/views/Inventory/InventoryEdit.vue';

const routes = [
  // Rutas de autenticación
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword },

  // Ruta principal del dashboard
  { path: '/', name: 'Dashboard', component: Dashboard },

  // Rutas de clientes
  { path: '/clients', name: 'ClientList', component: ClientList },
  { path: '/clients/create', name: 'ClientCreate', component: ClientCreate },
  { path: '/clients/edit/:id', name: 'ClientEdit', component: ClientEdit, props: true },

  // Rutas de empleados
  { path: '/employees', name: 'EmployeeList', component: EmployeeList },
  { path: '/employees/create', name: 'EmployeeCreate', component: EmployeeCreate },
  { path: '/employees/edit/:id', name: 'EmployeeEdit', component: EmployeeEdit, props: true },

  // Rutas de pedidos
  { path: '/orders', name: 'OrderList', component: OrderList },
  { path: '/orders/create', name: 'OrderCreate', component: OrderCreate },
  { path: '/orders/edit/:id', name: 'OrderEdit', component: OrderEdit, props: true },

  // Rutas de pizzas
  { path: '/pizzas', name: 'PizzaList', component: PizzaList },
  { path: '/pizzas/create', name: 'PizzaCreate', component: PizzaCreate },
  { path: '/pizzas/edit/:id', name: 'PizzaEdit', component: PizzaEdit, props: true },

  // Rutas de ingredientes
  { path: '/ingredients', name: 'IngredientList', component: IngredientList },
  { path: '/ingredients/create', name: 'IngredientCreate', component: IngredientCreate },
  { path: '/ingredients/edit/:id', name: 'IngredientEdit', component: IngredientEdit, props: true },

  // Rutas de proveedores
  { path: '/suppliers', name: 'SupplierList', component: SupplierList },
  { path: '/suppliers/create', name: 'SupplierCreate', component: SupplierCreate },
  { path: '/suppliers/edit/:id', name: 'SupplierEdit', component: SupplierEdit, props: true },

  // Rutas de inventario
  { path: '/inventory', name: 'InventoryList', component: InventoryList },
  { path: '/inventory/create', name: 'InventoryCreate', component: InventoryCreate },
  { path: '/inventory/edit/:id', name: 'InventoryEdit', component: InventoryEdit, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
