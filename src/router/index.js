import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import RegistrarLibro from '../views/RegistrarLibro.vue';
import BuscarLibros from '../views/BuscarLibros.vue';
import RegistrarPrestamo from '../views/RegistrarPrestamo.vue';
import RegistrarDevolucion from '../views/RegistrarDevolucion.vue';
import GestionUsuarios from '../views/GestionUsuarios.vue';
import ConsultaHistorial from '../views/ConsultaHistorial.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/libros/registrar', component: RegistrarLibro },
  { path: '/libros', component: BuscarLibros },
  { path: '/prestamos/registrar', component: RegistrarPrestamo },
  { path: '/devoluciones', component: RegistrarDevolucion },
  { path: '/usuarios', component: GestionUsuarios },
  { path: '/historial', component: ConsultaHistorial },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
