<template>
  <div>
    <label for="wpm-selector">Target Words per Minute</label>
    <select v-model="wpm" id="wpm-selector">
      <option
        v-for="wpmOption in wpmOptions"
        :value="wpmOption"
        :key="wpmOption"
      >
        {{ wpmOption }}
      </option>
    </select>
    <label for="material">Source Material</label>
    <textarea v-model="material" rows="4" />
    <label for="pause-selector">Sentence Pause (seconds)</label>
    <select v-model="pauseLength" id="pause-selector">
      <option
        v-for="pauseOption in pauseOptions"
        :value="pauseOption"
        :key="pauseOption"
      >
        {{ pauseOption }}
      </option>
    </select>
    <div>
      <Button-PlayPause v-model="play" />
    </div>
    <Transcription-Highlighter
      :play="play"
      :material="material"
      :wpm="wpm"
      :pauseLength="pauseLength"
    />
  </div>
</template>

<script>
const minWpm = 60
const maxWpm = 260
const wpmInterval = 5
export default {
  data: () => ({
    play: false,
    wpm: 120,
    wpmOptions: Array.from(
      { length: (maxWpm - minWpm) / wpmInterval + 1 },
      (_, index) => index * wpmInterval + minWpm
    ),
    pauseOptions: Array.from({ length: 5 }, (_, index) => index),
    pauseLength: 3,
    material: '',
  }),
}
</script>

<style lang="stylus" scoped>
label
  display block
  margin 1rem 0 0.25rem 0

textarea, input, button, select
  display block
  margin 0.25rem 0

textarea
  width 100%
</style>
