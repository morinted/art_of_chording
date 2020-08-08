<template>
  <div>
    <p>Recording time: {{ estimatedTime }}</p>
    <div id="ticker-container" :class="{ paused }">
      <div
        v-for="{
          sentence,
          sentenceIndex,
          distanceFromCurrent,
        } in tickerSentences"
        :key="sentenceIndex"
        :class="`ticker_${distanceFromCurrent}`"
      >
        <div v-if="distanceFromCurrent === 0">
          <mark class="completed">{{
            sentence.substring(0, characterIndex)
          }}</mark
          >{{ sentence.substring(characterIndex) }}
        </div>
        <div v-else>
          {{ sentence }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  computed,
  onUnmounted,
  watch,
} from '@vue/composition-api'
export default {
  props: {
    play: Boolean,
    material: { type: String, default: '' },
    wpm: Number,
    pauseLength: Number,
  },
  setup(props) {
    const state = reactive({
      sentenceIndex: 0,
      characterIndex: 0,
      timeoutId: null,
      sentences: computed(() =>
        props.material
          .split(/([!?.\n][")\n]*)/)
          .reduce((result, value, index, fragments) => {
            // Poor man's flatMap
            if (index % 2 === 1) return result
            const punctuation = fragments[index + 1] || ''
            return [...result, `${value.trim()}${punctuation.trim()}`]
          }, [])
      ),
      paused: false,
      estimatedTime: computed(() => {
        const pauseMinutes = (state.sentences.length * props.pauseLength) / 60
        const words = state.sentences.join(' ').length / 5
        const wordMinutes = words / props.wpm
        const totalMinutes = pauseMinutes + wordMinutes
        const minutes = Math.floor(totalMinutes)
        const seconds = Math.floor((totalMinutes - minutes) * 60)
        return `${minutes} minutes, ${seconds} seconds.`
      }),
    })
    const characterDelay = computed(() => {
      // Need to account for 500ms of space in between sentences when recording is playing at full speed.
      const pauseTime = (state.sentences.length - 1) * 0.5
      const characters = state.sentences.join(' ').length
      const charactersPerSecond = (props.wpm / 60) * 5
      const goalTime = characters / charactersPerSecond
      const readingTime = goalTime - pauseTime
      const effectiveCharactersPerSecond = characters / readingTime
      return Math.round(1000 / effectiveCharactersPerSecond)
    })
    const tickerSentences = computed(() =>
      // Prev 2 (optional)
      // Prev (optional)
      // Current
      // Next (optional)
      // Next 2 (optional)
      Array.from({ length: 5 }, (_, index) => {
        const distanceFromCurrent = index - 2
        const sentenceIndex = state.sentenceIndex + distanceFromCurrent
        const sentence = state.sentences[sentenceIndex]
        return {
          distanceFromCurrent,
          sentenceIndex,
          sentence,
        }
      }).filter((x) => !!x.sentence)
    )

    const tick = () => {
      if (
        // Next character
        state.characterIndex < state.sentences[state.sentenceIndex].length
      ) {
        state.characterIndex += 1
        state.timeoutId = setTimeout(() => tick(), characterDelay.value)
      } else {
        if (state.sentenceIndex < state.sentences.length - 1) {
          state.paused = true
          // Show next sentence halfway through pause.
          state.timeoutId = setTimeout(() => {
            state.sentenceIndex += 1
            state.characterIndex = 0
            state.timeoutId = setTimeout(() => {
              state.paused = false
              tick()
            }, (props.pauseLength * 1000) / 2)
          }, (props.pauseLength * 1000) / 2)
        }
      }
    }
    watch(
      () => props.play,
      (play) => {
        if (play) {
          state.paused = true
          setTimeout(() => {
            state.paused = false
            tick()
          }, props.pauseLength * 1000)
        } else {
          clearTimeout(state.timeoutId)
          state.timeoutId = null
          state.sentenceIndex = 0
          state.characterIndex = 0
          state.paused = false
        }
      }
    )
    onUnmounted(() => {
      clearTimeout(state.timeoutId)
    })
    return {
      tickerSentences,
      characterDelay,
      tick,
      ...toRefs(state),
    }
  },
}
</script>

<style lang="stylus" scoped>
#ticker-container
  &.paused
    background-color rgba(0, 0, 0, 0.1)
  position relative
  font-size 2rem
  text-align center
  height 18rem
  .ticker_
    &-2, &-1, &0, &1, &2
      position absolute
      margin 0 auto
      width 100%
      > div
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
    &0:not(.ticker_move)
      height 7rem
      > div
        overflow visible
        white-space normal
      display flex
      justify-content center
      align-items center

    &-2, &2
      font-size 0.6em
      opacity: 0.25
    &-1, &1
      font-size 0.8em
      opacity: 0.5
    &-2
      top: 0
    &-1
      top: 2rem
    &0
      top: 4rem
    &1
      top: 13rem
    &2
      top: 15rem
  .ticker-leave-to
    top: -2rem
    opacity 0

mark
  background-color: $accentHighlightColor
</style>
