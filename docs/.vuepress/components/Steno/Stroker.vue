<template>
  <Steno-Display :stroke="currentStroke" :labels="labels" />
</template>

<script>
import Stroke from '../../js/Stroke.js'
export default
  { props:
    { labels:
      { type: String
      , default: 'all'
      }
    , strokes:
      { type: Array
      , required: true
      }
    }
  , data: function() {
      return {
        strokeIndex: 0,
        intervalId: null
      }
    }
  , mounted: function() {
      this.toggle()
    }
  , beforeDestroy: function() {
      clearInterval(this.intervalId)
    }
  , methods: {
      toggle: function() {
        this.intervalId = setInterval(
          () => {
            this.strokeIndex = (this.strokeIndex + 1) % 2
          }, 500
        )
      }
    }
  , computed:
    { currentStroke() {
        return this.strokes[this.strokeIndex]
      }
    }
  }
</script>