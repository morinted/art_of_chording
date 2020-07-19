<template>
  <div>
    <Steno-Display :stroke="currentStroke" :labels="labels" />
    <Button-PlayStop :playing="playing" :onChange="togglePlay" />
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from '@vue/composition-api'
export default {
  props: {
    labels: { type: String, default: 'all' },
    strokes: { type: Array, required: true },
  },
  setup(props) {
    const strokeIndex = ref(0)
    const intervalId = ref(null)
    const playing = ref(false)

    const startAnimation = () => {
      intervalId.value = setInterval(() => {
        strokeIndex.value = (strokeIndex.value + 1) % 2
      }, 500)
    }
    const stopAnimation = () => clearInterval(intervalId.value)
    onUnmounted(stopAnimation)

    const togglePlay = () => {
      playing.value = !playing.value
      if (playing.value) {
        startAnimation()
      } else {
        stopAnimation()
      }
    }
    const currentStroke = computed(() => props.strokes[strokeIndex.value])
    return { currentStroke, togglePlay, playing }
  },
}
</script>
