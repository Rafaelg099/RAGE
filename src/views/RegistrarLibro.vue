<template>
  <div>
    <h2>Registrar Libro</h2>
    <form @submit.prevent="registrarLibro">
      <input v-model="titulo" placeholder="Título" />
      <input v-model="autor" placeholder="Autor" />
      <input v-model="categoria" placeholder="Categoría" />
      <input v-model="isbn" placeholder="ISBN" />
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: '', autor: '', categoria: '', isbn: ''
    };
  },
  methods: {
    registrarLibro() {
      console.log("Libro registrado:", this.titulo, this.autor);
    }
  }
};
</script>