import path from 'path-svg/svg-path'

const numberBarHeight = 0.55
const firstRow =
  ['t', 'p', 'h', '', 'F', 'P', 'L', 'T', 'D']
    .reduce((result, stenoKey, index) => {
      if (stenoKey) {
        result[stenoKey] =
          { x: index + 1
          , y: numberBarHeight
          , w: 1
          , h: 1
          , rounded: false
          }
      }
      return result
    }, {})
const secondRow =
  ['k', 'w', 'r', '', 'R', 'B', 'G', 'S', 'Z']
    .reduce((result, stenoKey, index) => {
      if (stenoKey) {
        result[stenoKey] =
          { x: index + 1
          , y: 1 + numberBarHeight
          , w: 1
          , h: 1
          , rounded: true
          }
      }
      return result
    }, {})
const thirdRow =
  ['a', 'o', 'e', 'u']
    .reduce((result, stenoKey, index) => {
      if (stenoKey) {
        result[stenoKey] =
          /**
           * With only one asterisk key, the vowel keys need to be separated
           * to avoid having them touch. With this code, I'm shifting them
           * a half unit apart by starting at 2.25 instead of 2.5, and then
           * having the right half (EU) start at 4.75 instead of 4.5.
           **/
          { x: index + 2.25 + (index >= 2 ? 0.5 : 0)
          , y: 2 + numberBarHeight
          , w: 1
          , h: 1
          , rounded: true
          }
      }
      return result
    }, {})
export const KEYS =
  [ '#', 's', 't', 'k', 'p', 'w', 'h', 'r'
  , 'a', 'o', '*', '-', 'e', 'u'
  , 'F', 'R', 'P', 'B', 'L', 'G', 'T', 'S', 'D', 'Z'
  ]
export const KEY_INFO =
  { '#': { x: 0, y: 0, w: 10, h: numberBarHeight, rounded: false }
  , s: { x: 0, y: numberBarHeight, w: 1, h: 2, rounded: true }
  , '*': { x: 4, y: numberBarHeight, w: 1, h: 2, rounded: true }
  , ...firstRow
  , ...secondRow
  , ...thirdRow
  }
const NUMBER_TO_KEYS =
  new Map(
    [ [ '1', 's' ]
    , [ '2', 't' ]
    , [ '3', 'p' ]
    , [ '4', 'h' ]
    , [ '5', 'a' ]
    , [ '0', 'o' ]
    , [ '6', 'f' ]
    , [ '7', 'p' ]
    , [ '8', 'l' ]
    , [ '9', 't' ]
    ]
  )
const LEFT_SHORTCUTS =
  new Map(
    [ [ 'j', 'skwr' ]
    , [ 'v', 'sr' ]
    , [ 'z', 'stkpw' ]
    , [ 'g', 'tkpw' ]
    , [ 'd', 'tk' ]
    , [ 'n', 'tph' ]
    , [ 'f', 'tp' ]
    , [ 'x', 'kp' ]
    , [ 'c', 'kr' ]
    , [ 'y', 'kwr' ]
    , [ 'q', 'kw' ]
    , [ 'b', 'pw' ]
    , [ 'm', 'ph' ]
    , [ 'l', 'hr' ]
    ]
  )

const MID_SHORTCUTS =
  new Map(
    [ [ 'oo', 'ao' ]
    , [ 'ii', 'aoeu' ]
    , [ 'uu', 'aou' ]
    , [ 'aa', 'aeu' ]
    , [ 'ee', 'aoe' ]
    , [ 'i', 'eu' ]
    ]
  )

const RIGHT_SHORTCUTS =
  new Map(
    [ [ 'ch', 'fp' ]
    , [ 'shn', 'gs' ]
    , [ 'sh', 'rb' ]
    , [ 'j', 'pblg' ]
    , [ 'n', 'pb' ]
    , [ 'x', 'bgs' ]
    , [ 'k', 'bg' ]
    , [ 'm', 'pl' ]
    , [ 'v', '*f' ]
    ]
  )
const NUMBER_PATTERN = /\d|#/

const SPLIT_PATTERN =
  /(#?j?v?s?z?g?f?t?x?c?k?d?n?m?b?p?y?q?w?h?r?l?)((?:a?o?e?u?i?\*?-?)+)((?:sh)?(?:ch)?v?f?r?n?m?j?p?k?x?b?l?g?t?s?d?z?)/

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
    let [, leftHand, midHand, rightHand, ] = stenoParts
    leftHand = Stroke.replaceShortcuts(LEFT_SHORTCUTS, leftHand)
    midHand = Stroke.replaceShortcuts(MID_SHORTCUTS, midHand)
    rightHand = Stroke.replaceShortcuts(RIGHT_SHORTCUTS, rightHand)
    return (
      { left: (numberBar ? '#' : '') + leftHand.toUpperCase().replace('#', '')
      , mid: midHand.toUpperCase()
      , right: rightHand.toUpperCase()
      }
    )
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
    normalized.left.split('').forEach(stenoKey => {
      stenoKey = stenoKey.toLowerCase()
      if (KEYS.indexOf(stenoKey) !== -1) {
        this[stenoKey] = true
        this.isValid = true
      }
    })
    normalized.mid.split('').forEach(stenoKey => {
      stenoKey = stenoKey.toLowerCase()
      if (KEYS.indexOf(stenoKey) !== -1) {
        this[stenoKey] = true
        this.isValid = true
      }
    })
    normalized.right.split('').forEach(stenoKey => {
      stenoKey = stenoKey.toUpperCase()
      if (KEYS.indexOf(stenoKey) !== -1) {
        this[stenoKey] = true
        this.isValid = true
      }
    })
    if (['a', 'o', 'e', 'u', '*'].every(key => !this[key])) {
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
}

export default Stroke
