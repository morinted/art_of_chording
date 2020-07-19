<template>
  <button @click="onChange">
    {{ playing ? '⬛&nbsp;&nbsp;Stop' : '▶️ &nbsp;&nbsp;Play' }}
  </button>
</template>

<script>
export default {
  props: {
    onChange: { type: Function, required: true },
    playing: { type: Boolean, required: true },
  },
}
</script>
<style scoped>
button {
  color: white;
  background-color: #c9070d;
  font-weight: bold;
  border-radius: 0.1rem;
  padding: 0.25rem 0.5rem;
}
</style>
