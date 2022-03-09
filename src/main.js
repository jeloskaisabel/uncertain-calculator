import { createApp } from 'vue';
import App from './App.vue';
import HomePage from './pages/Home.vue';
import LeccionesPage from './pages/Lecciones.vue';
import DesafiosPage from './pages/Desafios.vue';
import LeccionPage from './pages/Leccion.vue';
import ManipulacionAritmeticaPage from './pages/ManipulacionAritmetica.vue';
import CapacitorPage from './pages/Capacitor.vue';
import CalculadoraPage from './pages/Calculadora.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store/index';

// Importar
// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor';

// ***********************************
// 1. Registro de Rutas para páginas
// ***********************************
const routes = [
  { path: '/', component: HomePage },
  { path: '/lecciones', component: LeccionesPage },
  { path: '/desafios', component: DesafiosPage },
  { path: '/manipulacion-aritmetica', component: ManipulacionAritmeticaPage },
  { path: '/capacitor', component: CapacitorPage },
  { path: '/calculadora', component: CalculadoraPage },
  { path: '/leccion/:id', component: LeccionPage, props: true },
];
// ***********************************

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
