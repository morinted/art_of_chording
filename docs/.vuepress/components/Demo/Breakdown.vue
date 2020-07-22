<template>
  <Card title="Breakdown">
    <div class="container">
      <div
        class="word-stroke"
        v-for="(word, index) in stenoStrokes"
        :key="index"
      >
        <div class="word">{{ word[word.length - 1][0].trim() }}&nbsp;</div>
        <div class="stroke">
          <span class="steno" v-for="stroke in word" :key="stroke[1]"
            >{{ stroke[1] }}&nbsp;</span
          >
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: {
    stenoStrokes: Array,
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  font-size: 1.1rem;
  margin: 0.5rem 0;
}
.word-stroke {
  display: flex;
  flex-direction: column;
}
.word {
  margin-top: 0.5rem;
}
.stroke {
  margin-bottom: 0.5rem;
}
.steno {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
}
</style>
