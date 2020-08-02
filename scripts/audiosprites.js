/**
 * Requires ffmpeg
 */
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const audiosprite = require('audiosprite')

function audiospriteOptions(spriteName, speed) {
  const bitrate = 120
  const files = `audio/dictation/${spriteName}/${speed}/*`

  const options = {
    output: `./audio/dictation/sprites/${spriteName}_${speed}`,
    format: 'howler2',
    export: 'mp3',
    channels: 2,
    bitrate,
    path: './',
  }

  return [files, options]
}

function getSubdirectories(folderName) {
  const directory = path.resolve('audio/dictation/', folderName)
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
}

function makeJsForSprite(sprite) {
  const spriteAndFilename = sprite.src.map((filename) => [
    filename.split('.mp3')[0],
    filename,
  ])
  return [
    ...spriteAndFilename.map(
      ([spriteName, filename]) =>
        `import ${spriteName} from '../../../audio/dictation/sprites/${filename}'`
    ),
    '',
    'export default {',
    '  src: [',
    spriteAndFilename.map(([spriteName]) => spriteName).join(',\n'),
    '  ],',
    '  sprite: {',
    Object.keys(sprite.sprite)
      .map(
        (spriteName) =>
          `    ${spriteName}: ${JSON.stringify(sprite.sprite[spriteName])
            .split(',')
            .join(', ')}`
      )
      .join(',\n'),
    '  }',
    '}',
    '',
  ].join('\n')
}

function writeSpriteToFile(spriteName, fileContents, speed) {
  const output = `docs/.vuepress/sprites/${spriteName}_${speed}.js`
  return new Promise((resolve, reject) => {
    fs.writeFile(output, fileContents, (error) => {
      if (error) {
        console.error('writeSpriteToFile', error)
        console.error('Make sure to install ffmpeg: `brew install ffmpeg`')
        reject()
        return
      }
      console.log('Sprites written to', output)
      resolve()
    })
  })
}

function generateSprite(spriteName) {
  return Promise.all(
    getSubdirectories(spriteName).map((speed) => {
      return new Promise((resolve, reject) => {
        audiosprite(
          ...audiospriteOptions(spriteName, speed),
          (error, sprite) => {
            if (error) {
              console.error(`Generate sprite ${spriteName} ${speed}`, error)
              reject(error)
            }
            const spriteFile = makeJsForSprite(sprite)
            resolve(writeSpriteToFile(spriteName, spriteFile, speed))
          }
        )
      })
    })
  )
}

async function main() {
  await Promise.all([generateSprite('coffee')])
  exec(
    'npx prettier --write docs/.vuepress/sprites/*.js',
    (error, stdout, stderr) => {
      if (error) {
        console.log(`prettier error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`prettier stderr: ${stderr}`)
        return
      }
      console.log(`prettier results:\n${stdout}`)
    }
  )
}

main()
