<template>
  <div>
    <p>{{ currentText }}</p>
    <Steno-Display :stroke="currentStroke" labels="all" />
  </div>
</template>

<script>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  reactive,
  toRefs,
} from '@vue/composition-api'

const demoStrokes = [
  [
    ['Hell', 'HEL'],
    ['Hello', 'LO'],
  ],
  [[' world', 'WORL']],
  [[',', 'KW-BG']],
  [[' today', 'TOED']],
  [[" I'm", 'AOEUPL']],
  [[' learning', 'LERNG']],
  [[' how', 'HOU']],
  [[' a', 'AEU']],
  [
    [' snog', 'SNOG'],
    [' stenographer', 'FER'],
  ],
  [[' could', 'KO']],
  [[' break', 'BRAEK']],
  [[' down', 'DOUN']],
  [[' a', 'AEU']],
  [[' sentence', 'STENS']],
  [[' in order', 'NORD']],
  [[' to', 'TO']],
  [[' capture', 'KA*FP']],
  [[' human', 'HAOUM']],
  [[' speech', 'SPAOEFP']],
  [[' more', 'MOR']],
  [
    [' quick', 'KWIK'],
    [' quickly', 'LI'],
  ],
  [[' than', 'THAN']],
  [[' by', 'BI']],
  [[' typing', 'TAOEUPG']],
  [['.', 'TP-PL']],
  [
    [' Un', 'UN'],
    [' Unfortunately', 'FORL'],
  ],
  [[',', 'KW-BG']],
  [[' it', 'T']],
  [[' kind', 'KAOEUND']],
  [[' of', '-F']],
  [[' looks', 'LAOKS']],
  [[' like', 'LAOEUK']],
  [
    [' jib', 'JIB'],
    [' gibberish', 'RIRB'],
  ],
  [['.', 'TP-PL']],
  [[' It', 'T']],
  [[' might', 'MAOEUT']],
  [[' seem', 'SEEM']],
  [
    [' un', 'UN'],
    [' unmanage', 'MANG'],
    [' unmanageable', '-BL'],
  ],
  [[',', 'KW-BG']],
  [[' but', 'BU']],
  [[' after', 'AF']],
  [[' learning', 'LERNG']],
  [[' a', 'AEU']],
  [[' theory', 'THOIR']],
  [[" it's", 'T-S']],
  [[' actually', 'TWAIL']],
  [[' quite', 'KWAOEUT']],
  [[' intuitive', 'SBAOUF']],
  [['!', 'SKLAM']],
]
export default {
  setup() {
    const state = reactive({
      text: '',
      word: '',
      timeoutId: null,
      wordIndex: -1,
      strokeIndex: -1,
      currentText: computed(() => `${state.text}${state.word}`),
      currentStroke: computed(() =>
        state.wordIndex < 0 || state.wordIndex === demoStrokes.length
          ? ''
          : demoStrokes[state.wordIndex][state.strokeIndex][1]
      ),
    })

    function processStroke() {
      if (state.wordIndex < 0) {
        state.wordIndex = 0
        state.strokeIndex = 0
      } else if (
        demoStrokes[state.wordIndex].length ===
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
      if (state.wordIndex < demoStrokes.length) {
        state.word = demoStrokes[state.wordIndex][state.strokeIndex][0]
        state.timeoutId = setTimeout(() => processStroke(), 250)
      } else {
      }
    }

    onMounted(() => processStroke())
    onUnmounted(() => clearTimeout(state.timeoutId))

    return { ...toRefs(state) }
  },
}
</script>

<style></style>
