<template>
  <button @click="$emit('input', !value)">
    {{
      value
        ? stop
          ? '⏪&nbsp;&nbsp;Stop'
          : '⏸&nbsp;&nbsp;Pause'
        : '▶️&nbsp;&nbsp;Play'
    }}
  </button>
</template>

<script>
export default {
  props: {
    value: Boolean,
    stop: Boolean, // Say "stop" instead of "pause"
  },
}
</script>
<style scoped>
button {
  border: 1px solid currentColor;
  background-color: rgba(255, 255, 255, 0.2);
  width: 6rem;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1.25px;
  border-radius: 25px;
  padding: 0.4rem 0;
  text-transform: uppercase;
}
button:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
