<template>
  <div>
    <label for="dictation-selector">Dictation Material</label>
    <select v-model="text" id="dictation-selector">
      <option
        v-for="textOption in textOptions"
        :value="textOption.value"
        :key="textOption.value"
      >
        {{ textOption.value }}
      </option>
    </select>
    <label for="speed-selector">Speed</label>
    <select v-model="speed" id="speed-selector">
      <option
        v-for="speedOption in speedOptions[text]"
        :value="speedOption"
        :key="speedOption"
      >
        {{ speedOption }} WPM
      </option>
    </select>
    <button @click="$emit('selection', { text, speed })" type="button">
      Go!
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: 'Coffee',
    textOptions: [{ value: 'Coffee' }],
    speed: 60,
    nativeSpeeds: {
      Coffee: [120, 225],
    },
  }),
  computed: {
    speedOptions: function () {
      const expandedRanges = {}
      for (let text in this.$data.nativeSpeeds) {
        const speeds = this.$data.nativeSpeeds[text]
        const possibleSpeeds = new Set(speeds)
        const topSpeed = speeds.reduce((top, current) => Math.max(top, current))
        //
        for (let i = 10; i < topSpeed; i += 10) {
          if (
            speeds.some(
              (nativeSpeed) => i >= nativeSpeed / 2 && i < nativeSpeed
            )
          ) {
            possibleSpeeds.add(i)
          }
        }
        expandedRanges[text] = [...possibleSpeeds].sort((a, b) => a - b)
      }
      return expandedRanges
    },
  },
}
</script>

<style lang="stylus" scoped></style>
