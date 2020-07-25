<template>
  <div>
    <Steno-Stroker :stenoStrokes="demo" />
    <p>
      Notice how the stenographer only hits a couple chords a second but hits
      crazy high speeds?
    </p>
    <p>
      Here is a version of that quote with each word on top of its corresponding
      chord syllables:
    </p>
    <Demo-Breakdown :stenoStrokes="demo" />
  </div>
</template>

<script>
import { harrietTubman } from '../../js/quotes'
export default {
  data: () => ({
    demo: harrietTubman,
  }),
}
</script>

<style scoped></style>
