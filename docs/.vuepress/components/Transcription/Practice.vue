<template>
  <div>
    <Button-PlayPause stop v-model="play" />
    <progress :value="progress" max="100" />
    <div>
      <textarea v-model="userInput" rows="10" />
    </div>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  onMounted,
  watch,
  computed,
  onUnmounted,
} from '@vue/composition-api'
import { Howl } from 'howler'
import coffee120 from '../../sprites/coffee_120'
import coffee225 from '../../sprites/coffee_225'

const sprites = {
  Coffee: [
    { sprite: coffee120, speed: 120 },
    { sprite: coffee225, speed: 225 },
  ],
}

export default {
  props: {
    text: String,
    speed: Number,
  },
  setup(props) {
    // Find the sprite with the closest speed.
    // Ratio of pause needed to reach our target speed.
    const state = reactive({
      play: false,
      howl: null,
      loading: true,
      sentenceIndex: 1,
      currentSpriteLength: 0,
      targetWpm: 100,
      userInput: '',
      sprite: computed(() =>
        sprites[props.text].reduce((selectedSprite, candidate) => {
          const candidateDistance = candidate.speed - props.speed
          const selectedDistance = selectedSprite.speed - props.speed
          if (selectedDistance < 0 || candidateDistance < selectedDistance)
            return candidate
          return selectedSprite
        })
      ),
      startTime: Date.now(),
      currentTime: Date.now(),
      intervalId: null,
    })
    const pauseRatio = state.sprite.speed / props.speed - 1
    const totalSpriteLength = parseInt(
      Object.values(state.sprite.sprite.sprite).reduce(
        (length, [, spriteLength]) => length + spriteLength,
        0
      )
    )
    console.log(totalSpriteLength)
    const progress = computed(
      () => ((state.currentTime - state.startTime) / totalSpriteLength) * 100
    )

    const totalDictationLength =
      totalSpriteLength * (state.sprite.speed / props.speed) +
      500 * Object.keys(state.sprite.sprite.sprite).length
    console.log(totalDictationLength)

    onMounted(() => {
      state.howl = new Howl({
        ...state.sprite.sprite,
        onload: () => {
          state.loading = false
        },
      })
    })
    onUnmounted(() => {
      state.howl.unload()
    })

    const getCurrentPause = () =>
      500 + parseInt(state.currentSpriteLength * 1000, 10) * pauseRatio

    const playNextSentence = () => {
      const playId = state.howl.play(state.sentenceIndex.toString())
      state.currentSpriteLength = state.howl.duration(playId)
      state.howl.on(
        'end',
        () => {
          state.sentenceIndex += 1
          if (state.sentenceIndex.toString() in state.sprite.sprite.sprite) {
            setTimeout(() => playNextSentence(), getCurrentPause())
          } else {
            setTimeout(() => {
              console.log('Out of time!')
            }, getCurrentPause())
          }
        },
        playId
      )
    }
    watch(
      () => state.play,
      (play) => {
        if (play) {
          state.startTime = Date.now()
          state.currentTime = Date.now()
          playNextSentence()
          state.intervalId = setInterval(
            () => (state.currentTime = Date.now()),
            500
          )
        } else {
          if (state.intervalId) {
            clearInterval(state.intervalId)
          }
          state.intervalId = null
          state.howl.stop()
          state.sentenceIndex = 0
          state.startTime = Date.now()
          state.currentTime = Date.now()
        }
      }
    )
    return { ...toRefs(state), totalDictationLength, progress }
  },
}
</script>

<style lang="stylus" scoped>
textarea
  width 100%
  display block
</style>
