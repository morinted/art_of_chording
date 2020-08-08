<template>
  <div>
    <Transcription-Selection
      v-if="state === 'selection'"
      @selection="selectionMade"
    />
    <Transcription-Practice v-if="state === 'player'" v-bind="options" />
  </div>
</template>

<script>
export default {
  data: () => ({
    options: null,
    state: 'selection',
  }),
  methods: {
    selectionMade: function (options) {
      this.$data.options = options
      this.$data.state = 'player'
    },
  },
}
</script>

<style></style>
