<template>
  <Card title="Breakdown">
    <div class="container">
      <div
        class="word-stroke"
        v-for="(word, index) in stenoStrokes"
        :key="index"
      >
        <div class="word">
          {{ word[word.length - 1][0].trim() }}
        </div>
        <div class="stroke">
          <span class="steno" v-for="stroke in word" :key="stroke[1]">
            {{ stroke[1] }}
          </span>
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
.steno {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  font-size: 1.2rem;
}
.word-stroke {
  padding: 0.1rem 0.4rem;
  margin: 0.5rem 0.2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.98);
  border-radius: 5px;
}
</style>
