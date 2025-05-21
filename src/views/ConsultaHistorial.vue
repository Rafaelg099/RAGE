<template>
  <div>
    <h2>Mi Historial</h2>
    <ul>
      <li v-for="item in historial" :key="item.id">
        {{ item.libro }} - {{ item.fecha }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historial: [
        { id: 1, libro: 'Libro A', fecha: '2024-01-10' },
        { id: 2, libro: 'Libro B', fecha: '2024-03-21' }
      ]
    };
  }
};
</script>