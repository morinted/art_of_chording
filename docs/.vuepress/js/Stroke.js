const NUMBER_BAR_HEIGHT = 0.55
const firstRow = (numberBarHeight) =>
  ['t', 'p', 'h', '', 'F', 'P', 'L', 'T', 'D'].reduce(
    (result, stenoKey, index) => {
      if (stenoKey) {
        result[stenoKey] = {
          x: index + 1,
          y: numberBarHeight,
          w: 1,
          h: 1,
          rounded: false,
        }
      }
      return result
    },
    {}
  )
const secondRow = (numberBarHeight) =>
  ['k', 'w', 'r', '', 'R', 'B', 'G', 'S', 'Z'].reduce(
    (result, stenoKey, index) => {
      if (stenoKey) {
        result[stenoKey] = {
          x: index + 1,
          y: 1 + numberBarHeight,
          w: 1,
          h: 1,
          rounded: true,
        }
      }
      return result
    },
    {}
  )
const thirdRow = (numberBarHeight) =>
  ['a', 'o', 'e', 'u'].reduce((result, stenoKey, index) => {
    if (stenoKey) {
      result[stenoKey] =
        /**
         * With only one asterisk key, the vowel keys need to be separated
         * to avoid having them touch. With this code, I'm shifting them
         * a half unit apart by starting at 2.25 instead of 2.5, and then
         * having the right half (EU) start at 4.75 instead of 4.5.
         **/
        {
          x: index + 2.25 + (index >= 2 ? 0.5 : 0),
          y: 2 + numberBarHeight,
          w: 1,
          h: 1,
          rounded: true,
        }
    }
    return result
  }, {})
export const KEYS = [
  '#',
  's',
  't',
  'k',
  'p',
  'w',
  'h',
  'r',
  'a',
  'o',
  '*',
  '-',
  'e',
  'u',
  'F',
  'R',
  'P',
  'B',
  'L',
  'G',
  'T',
  'S',
  'D',
  'Z',
]
export const KEY_INFO = (numberBarHeight) => ({
  '#': numberBarHeight
    ? { x: 0, y: 0, w: 10, h: numberBarHeight, rounded: false }
    : null,
  s: { x: 0, y: numberBarHeight, w: 1, h: 2, rounded: true },
  '*': { x: 4, y: numberBarHeight, w: 1, h: 2, rounded: true },
  ...firstRow(numberBarHeight),
  ...secondRow(numberBarHeight),
  ...thirdRow(numberBarHeight),
})
export const NUMBERED_KEY_INFO = KEY_INFO(NUMBER_BAR_HEIGHT)
export const COMPACT_KEY_INFO = KEY_INFO(0)
const NUMBER_TO_KEYS = new Map([
  ['1', 's'],
  ['2', 't'],
  ['3', 'p'],
  ['4', 'h'],
  ['5', 'a'],
  ['0', 'o'],
  ['6', 'f'],
  ['7', 'p'],
  ['8', 'l'],
  ['9', 't'],
])
const LEFT_SHORTCUTS = new Map([
  ['nt', 'spw'],
  ['ch', 'kh'],
  ['j', 'skwr'],
  ['v', 'sr'],
  ['z', 'stkpw'],
  ['g', 'tkpw'],
  ['d', 'tk'],
  ['n', 'tph'],
  ['f', 'tp'],
  ['x', 'kp'],
  ['c', 'kr'],
  ['y', 'kwr'],
  ['q', 'kw'],
  ['b', 'pw'],
  ['m', 'ph'],
  ['l', 'hr'],
])

const MID_SHORTCUTS = new Map([
  ['oo', 'ao'],
  ['ii', 'aoeu'],
  ['uu', 'aou'],
  ['aa', 'aeu'],
  ['ee', 'aoe'],
  ['i', 'eu'],
])

const RIGHT_SHORTCUTS = new Map([
  ['ch', 'fp'],
  ['shn', 'gs'],
  ['sh', 'rb'],
  ['j', 'pblg'],
  ['n', 'pb'],
  ['x', 'bgs'],
  ['k', 'bg'],
  ['m', 'pl'],
  ['v', '*f'],
])
const NUMBER_PATTERN = /\d|#/

const SPLIT_PATTERN = /(#?j?v?(?:nt)?s?z?g?f?t?x?c?k?d?n?m?b?p?y?q?w?h?r?l?)((?:a?o?e?u?i?\*?-?)+)((?:sh)?(?:ch)?v?f?r?n?m?j?p?k?x?b?l?g?t?s?d?z?)/

class Stroke {
  static replaceShortcuts(replacements, steno) {
    replacements.forEach((longhand, shorthand) => {
      steno = steno.replace(shorthand, longhand)
    })
    return steno
  }

  static normalizeStroke(rawStroke) {
    rawStroke = rawStroke ? rawStroke.trim() : null
    if (!rawStroke) return null
    const numberBar = NUMBER_PATTERN.test(rawStroke)
    if (numberBar) {
      rawStroke = Stroke.replaceShortcuts(NUMBER_TO_KEYS, rawStroke)
    }

    const stenoParts = rawStroke.split(SPLIT_PATTERN)
    if (stenoParts.length !== 5) return false
    let [, leftHand, midHand, rightHand] = stenoParts
    leftHand = Stroke.replaceShortcuts(LEFT_SHORTCUTS, leftHand)
    midHand = Stroke.replaceShortcuts(MID_SHORTCUTS, midHand)
    rightHand = Stroke.replaceShortcuts(RIGHT_SHORTCUTS, rightHand)
    return {
      left: (numberBar ? '#' : '') + leftHand.toUpperCase().replace('#', ''),
      mid: midHand.toUpperCase(),
      right: rightHand.toUpperCase(),
    }
  }

  constructor(rawSteno) {
    this.isValid = false
    rawSteno = rawSteno.toLowerCase()
    KEYS.reduce((stroke, key) => {
      stroke[key] = false
      return stroke
    }, this)
    const normalized = Stroke.normalizeStroke(rawSteno)
    if (!normalized) return
    normalized.left.split('').forEach((stenoKey) => {
      stenoKey = stenoKey.toLowerCase()
      if (KEYS.indexOf(stenoKey) !== -1) {
        this[stenoKey] = true
        this.isValid = true
      }
    })
    normalized.mid.split('').forEach((stenoKey) => {
      stenoKey = stenoKey.toLowerCase()
      if (KEYS.indexOf(stenoKey) !== -1) {
        this[stenoKey] = true
        this.isValid = true
      }
    })
    normalized.right.split('').forEach((stenoKey) => {
      stenoKey = stenoKey.toUpperCase()
      if (KEYS.indexOf(stenoKey) !== -1) {
        this[stenoKey] = true
        this.isValid = true
      }
    })
    if (['a', 'o', 'e', 'u', '*'].every((key) => !this[key])) {
      this['-'] = true
    }
  }

  toString() {
    return KEYS.reduce((normalized, key) => {
      if (this[key]) {
        return normalized + key.toUpperCase()
      }
      return normalized
    }, '')
  }

  fingerPositions(numberBarHeight = NUMBER_BAR_HEIGHT) {
    // Return the x/y coordinate of each finger and whether it would be pressed.
    const getHeight = (topKey, bottomKey) => {
      // If both or none are hit, we want the middle.
      if (topKey === bottomKey) return 1
      // Otherwise we want the top for the top key and the bottom for the bottom key.
      if (topKey) return 0.5
      // bottomKey
      return 1.48
    }
    const getWidth = (leftKey, rightKey) => {
      // If both or none are hit, we want the middle.
      if (leftKey === rightKey) return 1
      // Otherwise we want the top for the top key and the bottom for the bottom key.
      if (leftKey) return 0.5
      // rightKey
      return 1.5
    }
    return [
      // Left pinky
      { x: 0.5, y: numberBarHeight + 1, pressed: this.s, yCrack: true },
      // Left ring
      {
        x: 1.5,
        y: numberBarHeight + getHeight(this.t, this.k),
        pressed: this.t || this.k,
        yCrack: this.t === this.k,
      },
      // Left middle
      {
        x: 2.5,
        y: numberBarHeight + getHeight(this.p, this.w),
        pressed: this.p || this.w,
        yCrack: this.p === this.w,
      },
      // Left index
      {
        x: 3.5,
        y: numberBarHeight + getHeight(this.h, this.r),
        pressed: this.h || this.r,
        yCrack: this.h === this.r,
      },
      // Left thumb
      {
        x: 2.25 + getWidth(this.a, this.o),
        y: numberBarHeight + 2.47,
        pressed: this.a || this.o,
        xCrack: this.a === this.o,
      },
      // Right thumb
      {
        x: 4.75 + getWidth(this.e, this.u),
        y: numberBarHeight + 2.47,
        pressed: this.e || this.u,
        xCrack: this.e === this.u,
      },
      // Right index
      {
        x: !this['*'] ? 5.5 : 4 + getWidth(this['*'], this.F || this.R),
        y: numberBarHeight + getHeight(this.F, this.R),
        pressed: this.F || this.R || this['*'],
        xCrack: (this.F || this.R) && this['*'],
        yCrack: this.F === this.R,
      },
      // Right middle
      {
        x: 6.5,
        y: numberBarHeight + getHeight(this.P, this.B),
        pressed: this.P || this.B,
        yCrack: this.P === this.B,
      },
      // Right ring
      {
        x: 7.5,
        y: numberBarHeight + getHeight(this.L, this.G),
        pressed: this.L || this.G,
        yCrack: this.L === this.G,
      },
      // Right pinky
      {
        x:
          !this.D && !this.Z
            ? 8.5
            : 8 + getWidth(this.T || this.S, this.D || this.Z),
        y: numberBarHeight + getHeight(this.T || this.D, this.S || this.Z),
        pressed: this.T || this.S || this.D || this.Z,
        yCrack: this.T === this.S || this.D === this.Z,
        xCrack: (this.T && this.D) || (this.S && this.Z),
      },
    ]
  }
}

export default Stroke
