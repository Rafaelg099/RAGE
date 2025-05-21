<template>
  <div>
    <h2>Registrar Préstamo</h2>
    <form @submit.prevent="registrar">
      <input v-model="usuario" placeholder="Usuario" />
      <input v-model="libro" placeholder="Libro" />
      <input v-model="fecha" type="date" />
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: '', libro: '', fecha: ''
    };
  },
  methods: {
    registrar() {
      console.log("Préstamo registrado:", this.usuario, this.libro, this.fecha);
    }
  }
};
</script>