<template>
  <div>
    <h1>📚 Biblioteca</h1>
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/libros/registrar">Registrar Libro</router-link> |
      <router-link to="/libros">Buscar Libros</router-link> |
      <router-link to="/prestamos/registrar">Registrar Préstamo</router-link> |
      <router-link to="/devoluciones">Registrar Devolución</router-link> |
      <router-link to="/usuarios">Gestión de Usuarios</router-link> |
      <router-link to="/historial">Mi Historial</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}
</style>

