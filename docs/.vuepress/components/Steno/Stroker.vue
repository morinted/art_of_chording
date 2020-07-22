<template>
  <Card title="What Steno Looks Like">
    <div class="wrapper">
      <Demo-Controls
        :done="done"
        :strokeCount="strokeCount"
        :characterCount="characterCount"
        @play="handlePlay"
        @speed="handleSpeed"
      />
      <h3>Output</h3>
      <Demo-TypeArea :text="currentText" :playing="playing" />
      <h3>
        Steno layout
        <div class="stroke-name">
          Syllable:
          <div class="stroke-container">
            {{ currentStroke }}
          </div>
        </div>
      </h3>

      <Steno-Display :stroke="currentStroke" labels="all" />
    </div>
  </Card>
</template>

<script>
import { computed, onUnmounted, reactive, toRefs } from '@vue/composition-api'

export default {
  props: {
    stenoStrokes: {
      required: true,
      type: Array,
      validator: (stenoStrokes) => {
        if (!Array.isArray(stenoStrokes)) return false
        return stenoStrokes.every((word) => {
          if (!Array.isArray(word)) return false
          return word.every(
            (wordChordPair) =>
              wordChordPair.length === 2 &&
              wordChordPair.every(
                (wordOrChord) => typeof wordOrChord === 'string'
              )
          )
        })
      },
    },
  },
  setup({ stenoStrokes }) {
    const state = reactive({
      text: '',
      word: '',
      timeoutId: null,
      wordIndex: -1,
      strokeIndex: -1,
      speed: 3.5,
      playing: false,
      done: false,
    })

    const currentText = computed(() => `${state.text}${state.word}`)
    const currentStroke = computed(() =>
      state.wordIndex < 0 || state.wordIndex === stenoStrokes.length
        ? ''
        : stenoStrokes[state.wordIndex][state.strokeIndex][1]
    )
    const strokeCount = computed(() =>
      stenoStrokes.reduce((sum, word) => {
        return sum + word.length
      }, 0)
    )
    const characterCount = computed(() =>
      stenoStrokes.reduce((sum, word) => {
        return sum + word[word.length - 1][0].length
      }, 0)
    )
    const animateNextStroke = () => {
      state.timeoutId = setTimeout(() => processStroke(), 1000 / state.speed)
    }
    const processStroke = () => {
      if (state.wordIndex < 0) {
        state.wordIndex = 0
        state.strokeIndex = 0
      } else if (
        stenoStrokes[state.wordIndex].length ===
        state.strokeIndex + 1
      ) {
        state.strokeIndex = 0
        state.wordIndex += 1
      } else {
        state.strokeIndex += 1
      }

      if (state.strokeIndex === 0) {
        state.text += state.word
        state.word = ''
      }
      if (state.wordIndex < stenoStrokes.length) {
        state.word = stenoStrokes[state.wordIndex][state.strokeIndex][0]
        animateNextStroke()
      } else {
        state.done = true
      }
    }

    const handlePlay = (play) => {
      state.playing = play
      if (play) {
        if (state.done) {
          state.done = false
          state.text = ''
          state.word = ''
          state.wordIndex = -1
          state.strokeIndex = -1
        }
        if (!state.timeoutId) {
          animateNextStroke()
        }
      } else {
        clearTimeout(state.timeoutId)
        state.timeoutId = null
      }
    }
    const handleSpeed = (speed) => {
      state.speed = speed
    }

    onUnmounted(() => {
      clearTimeout(state.timeoutId)
      state.timeoutId = null
    })

    return {
      ...toRefs(state),
      handlePlay,
      handleSpeed,
      currentText,
      currentStroke,
      characterCount,
      strokeCount,
    }
  },
}
</script>

<style scoped>
.stroke-name {
  float: right;
  font-size: 90%;
}
.stroke-container {
  width: 7rem;
  display: inline-block;
  text-align: center;
}
.wrapper {
  margin: 0.75rem 0;
}
</style>
