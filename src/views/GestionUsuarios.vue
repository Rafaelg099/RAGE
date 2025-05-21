<template>
  <div>
    <h2>Gestión de Usuarios</h2>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }} - <button @click="bloquear(usuario.id)">Bloquear</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'Ana' }
      ]
    };
  },
  methods: {
    bloquear(id) {
      console.log("Usuario bloqueado:", id);
    }
  }
};
</script>