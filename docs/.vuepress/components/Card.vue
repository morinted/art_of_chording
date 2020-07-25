<template>
  <div class="card">
    <p class="title">{{ title }}</p>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style scoped>
.card {
  background-color: #f3f5f7;
  border-color: #3e9fff;
  padding: 0.1rem 1.5rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
}
.title {
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: -0.4rem;
}
</style>
