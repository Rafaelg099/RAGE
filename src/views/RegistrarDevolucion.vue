<template>
  <div>
    <h2>Registrar Devolución</h2>
    <form @submit.prevent="registrar">
      <input v-model="prestamoId" placeholder="ID Préstamo" />
      <button type="submit">Registrar Devolución</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { prestamoId: '' };
  },
  methods: {
    registrar() {
      console.log("Devolución registrada para:", this.prestamoId);
    }
  }
};
</script>