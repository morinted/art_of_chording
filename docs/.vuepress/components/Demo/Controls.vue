<template>
  <div class="container">
    <div>
      <label><b>Controls</b></label>
      <br />
      <Button-PlayPause v-model="playing" @input="$emit('play', $event)" />
    </div>
    <div>
      <label><b>Speed</b></label>
      <template v-for="(speedOption, index) in speeds">
        <div class="speed-option" :key="speedOption">
          <input
            type="radio"
            :id="speedNames[index]"
            :value="speedOption"
            v-model="speed"
            @input="$emit('speed', $event.target.value)"
          />
          <label :for="speedNames[index]">
            {{ speedNames[index] }} ({{ wpm[index] }} WPM)
          </label>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, watch, computed } from '@vue/composition-api'
export default {
  props: {
    done: Boolean,
    strokeCount: Number,
    characterCount: Number,
  },
  setup: function (props, { emit }) {
    const speeds = [0.5, 2, 3.5, 4.5]
    const speedNames = [
      'Beginner',
      'Amateur',
      'Professional',
      'Fast Professional',
    ]
    const state = reactive({
      playing: false,
      speed: speeds[2],
    })
    const wpm = computed(() =>
      speeds.map((strokesPerSecond) =>
        Math.round(
          ((props.characterCount / 5) * 60) /
            (props.strokeCount / strokesPerSecond)
        )
      )
    )
    watch(
      () => props.done,
      (done) => {
        if (done) {
          state.playing = false
          emit('play', false)
        }
      }
    )

    return { ...toRefs(state), speeds, speedNames, wpm }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  align-content: space-around;
}
.container > div {
  flex-grow: 1;
}
.container > div > label {
  display: block;
  margin-bottom: 5px;
}
div.speed-option {
  padding: 2px 0;
}
</style>
