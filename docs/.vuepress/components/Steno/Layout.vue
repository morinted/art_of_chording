<template>
  <div :class="{ stenoLayout: true, compact }">
    <svg
      :viewBox="`0 0 ${svgInfo.svgWidth} ${svgInfo.svgHeight}`"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :style="svgInfo.svgStyle"
    >
      <g v-for="svgKey in svgInfo.svgKeys" :key="svgKey.key">
        <path
          class="steno-key"
          fill="currentColor"
          :class="{ pressed: !!stroke[svgKey.key] }"
          :d="svgKey.keyPath"
        ></path>
      </g>
      <template v-if="fingers">
        <circle
          v-for="(finger, index) in svgInfo.svgFingers"
          :key="index"
          r="20"
          :cx="finger.x"
          :cy="finger.y"
          :class="{ pressed: finger.pressed }"
        />
      </template>
      <g v-for="svgKey in svgInfo.svgKeys" :key="`text-${svgKey.key}`">
        <text
          v-if="labels[svgKey.key]"
          :style="svgInfo.letterStyle"
          text-anchor="middle"
          dominant-baseline="central"
          :x="svgKey.x"
          :y="svgKey.y"
        >
          {{ svgKey.key.toUpperCase() }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import Stroke, {
  NUMBERED_KEY_INFO,
  COMPACT_KEY_INFO,
  KEYS,
} from '../../js/Stroke.js'
import path from 'path-svg/svg-path'

export default {
  props: {
    labels: { type: Stroke, required: true },
    stroke: { type: Stroke, required: true },
    compact: { type: Boolean, default: false },
    fingers: { type: Boolean, default: false },
  },
  data: () => ({
    unit: 50, // SVG base pixel multiplier
    aspectRatio: 1.2, // How much taller are keys than wide?
  }),
  computed: {
    svgInfo: function () {
      return this.compact
        ? this.getSvgInfo(COMPACT_KEY_INFO)
        : this.getSvgInfo(NUMBERED_KEY_INFO)
    },
  },
  methods: {
    // Calculate the positions and paths for all the steno keys in the SVG.
    getSvgInfo: function (keyInfoType) {
      const unit = this.$data.unit
      const aspectRatio = this.$data.aspectRatio
      const arcRadius = unit / 2
      const strokeWidth = this.compact ? unit / 10 : unit / 25
      const padding = this.compact ? unit / 20 : unit / 10

      const boardHeight = keyInfoType.a.y + 1
      const rows = Math.ceil(keyInfoType.a.y)
      const boardWidth = keyInfoType.D.x + 1
      const columns = Math.ceil(keyInfoType.D.x)
      const svgHeight = boardHeight * unit * aspectRatio + (rows + 2) * padding
      const svgWidth = boardWidth * unit + (columns + 2) * padding
      const svgStyle = {
        stroke: 'currentColor',
        strokeWidth: `${strokeWidth}px`,
        fillOpacity: 0,
        height: 'auto',
      }
      const letterStyle = {
        strokeWidth: 0,
        fill: 'currentColor',
        fillOpacity: 1,
        fontSize: '25px',
      }
      const svgFingers = this.$props.stroke
        .fingerPositions(this.compact ? 0 : undefined)
        .map(({ x, y, pressed, xCrack, yCrack }, index) => {
          const normalizedX = // Normalize thumbs by removing the fraction.
            index === 4 ? x + 0.75 : index === 5 ? x - 0.75 : x

          const startX =
            x * unit +
            padding * Math.ceil(normalizedX) +
            (xCrack ? padding / 2 : 0)
          const startY =
            y * unit * aspectRatio +
            padding * Math.ceil(y) +
            (yCrack ? padding / 2 : 0)
          return { x: startX, y: startY, pressed }
        })
      const svgKeys = KEYS.map((key) => {
        const keyInfo = keyInfoType[key]
        if (!keyInfo) return null
        const internalHorizontalPadding =
          keyInfo.w > 1 ? parseInt(keyInfo.w - 1) * padding : 0

        // We need to break the padding rules for E and U
        const removePadding = ['e', 'u'].indexOf(key) !== -1 ? 1 : 0
        const startX =
          keyInfo.x * unit +
          padding * (Math.ceil(keyInfo.x + 1) - removePadding)
        const startY =
          keyInfo.y * unit * aspectRatio + padding * Math.ceil(keyInfo.y + 1)
        const initialPath = path() // Draw the common part of the key (flat or rounded)
          .to(startX, startY)
          .rel() // Operating relatively
          .hline(keyInfo.w * unit + internalHorizontalPadding) // Only define the top of the path
        const internalVerticalPadding =
          keyInfo.h > 1 ? parseInt(keyInfo.h - 1) * padding : 0

        const keyPath = !keyInfo.rounded
          ? // Flat key
            initialPath
              .vline(keyInfo.h * unit * aspectRatio + internalVerticalPadding)
              .hline(-keyInfo.w * unit - internalHorizontalPadding)
              .close()
              .str()
          : // Rounded key
            initialPath
              .vline(
                keyInfo.h * unit * aspectRatio -
                  arcRadius +
                  internalVerticalPadding
              )
              .arc(
                arcRadius * keyInfo.w,
                arcRadius,
                0,
                0,
                1,
                -keyInfo.w * unit,
                0
              )
              .close()
              .str()

        return {
          key,
          keyPath,
          letterStyle,
          x: startX + (keyInfo.w * unit) / 2,
          y:
            startY +
            (keyInfo.h * unit * aspectRatio) / 2 -
            // Raise letters in rounded keys slightly
            (keyInfo.rounded && keyInfo.h === 1 ? arcRadius / 7 : 0),
        }
      }).filter((x) => x) // Remove "-"
      return {
        strokeWidth,
        svgWidth,
        svgHeight,
        svgStyle,
        svgKeys,
        svgFingers,
        letterStyle,
      }
    },
  },
}
</script>
<style lang="stylus" scoped>
div {
  text-align: center;
}
svg {
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
}
path.steno-key {
  fill-opacity: 0;
  /* Key-release animation. */
  transition: fill-opacity 100ms ease-out;
}
path.steno-key.pressed {
  fill-opacity: 0.3;
  /* Key-press animation. */
  transition: fill-opacity 50ms ease-out;
}
.compact path.steno-key.pressed {
  fill-opacity: 0.6;
}
svg circle
  fill $accentColor
  stroke none
  fill-opacity 0.2
  &.pressed
    fill-opacity 0.9
    fill saturation(lighten($accentColor, 30), 60)
</style>
