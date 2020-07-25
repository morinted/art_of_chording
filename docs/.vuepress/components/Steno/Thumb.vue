<template>
  <div class="steno-thumb">
    <Steno-Display :stroke="stroke" labels="" compact />
  </div>
</template>

<script>
export default {
  props: {
    stroke: String,
  },
}
</script>

<style lang="stylus" scoped>
.steno-thumb
  width: 4.5rem
  vertical-align: top
  display: inline-block
</style>
