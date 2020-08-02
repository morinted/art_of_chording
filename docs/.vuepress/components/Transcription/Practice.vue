<template>
  <div>
    <Button-PlayPause v-model="play" />
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, watch } from '@vue/composition-api'
import { Howl } from 'howler'
import coffee120 from '../../sprites/coffee_120'
export default {
  setup() {
    const state = reactive({
      play: false,
      howl: null,
      loading: true,
      sentenceIndex: 1,
    })
    onMounted(() => {
      state.howl = new Howl({
        ...coffee120,
        onload: () => {
          state.loading = false
        },
      })
    })
    const playNextSentence = () => {
      const playId = state.howl.play(state.sentenceIndex.toString())
      state.howl.on(
        'end',
        () => {
          state.sentenceIndex += 1
          if (state.sentenceIndex.toString() in coffee120.sprite) {
            setTimeout(() => playNextSentence(), 500)
          }
        },
        playId
      )
    }
    watch(
      () => state.play,
      (play) => {
        if (play) {
          playNextSentence()
        }
      }
    )
    return { ...toRefs(state) }
  },
}
</script>

<style></style>
