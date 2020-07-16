<template>
  <Steno-Layout :stroke="stenoStroke" :labels="labelStroke" />
</template>

<script>
import Stroke from '../../js/Stroke.js'
export default {
  props: {
    labels: { type: String, default: 'all' },
    stroke: { type: String, required: true },
  },
  computed: {
    stenoStroke() {
      const stenoStroke = new Stroke(this.stroke)
      return stenoStroke
    },
    labelStroke() {
      const labelStroke =
        this.labels === 'all'
          ? new Stroke('#STKPWHRAO*EUFRPBLGTSDZ')
          : !this.labels
          ? new Stroke('-')
          : this.labels === 'same'
          ? this.stenoStroke
          : new Stroke(this.labels)
      return labelStroke
    },
  },
}
</script>
