<template>
  <p>{{ text }}<span :class="{ typing, cursor: true, playing }">|</span></p>
</template>

<script>
import { watch, ref } from '@vue/composition-api'
export default {
  props: {
    text: { type: String, required: true },
    playing: Boolean,
  },
  setup(props) {
    const typing = ref(false)
    const timeoutId = ref(null)
    watch(
      () => props.text,
      () => {
        typing.value = true
        if (timeoutId.value) {
          clearTimeout(timeoutId.value)
        }
        timeoutId.value = setTimeout(() => (typing.value = false), 500)
      }
    )
    return { typing }
  },
}
</script>

<style scoped>
p {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}
.cursor {
  visibility: hidden;
  font-weight: bold;
  animation: 1s blink step-end infinite;
}
.cursor.playing {
  visibility: visible;
}
.cursor.typing {
  animation: none;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: black;
  }
}
</style>
