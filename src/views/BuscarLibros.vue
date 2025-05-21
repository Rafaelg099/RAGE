<template>
  <div>
    <h2>Buscar Libros</h2>
    <input v-model="busqueda" @input="buscar" placeholder="Buscar..." />
    <ul>
      <li v-for="libro in resultados" :key="libro.id">{{ libro.titulo }} - {{ libro.autor }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      busqueda: '',
      resultados: []
    };
  },
  methods: {
    buscar() {
      this.resultados = [
        { id: 1, titulo: 'Ejemplo A', autor: 'Autor A' },
        { id: 2, titulo: 'Ejemplo B', autor: 'Autor B' }
      ].filter(libro =>
        libro.titulo.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    }
  }
};
</script>