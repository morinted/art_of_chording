<template>
  <Steno-Display :stroke="currentStroke" :labels="labels" />
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from '@vue/composition-api'
import Stroke from '../../js/Stroke.js'
export default {
  props: {
    labels: { type: String, default: 'all' },
    strokes: { type: Array, required: true },
  },
  setup(props) {
    const strokeIndex = ref(0)
    const intervalId = ref(null)
    onMounted(() => {
      intervalId.value = setInterval(() => {
        strokeIndex.value = (strokeIndex.value + 1) % 2
      }, 500)
    })
    onUnmounted(() => clearInterval(intervalId.value))

    const currentStroke = computed(() => props.strokes[strokeIndex.value])
    return { currentStroke }
  },
}
</script>
