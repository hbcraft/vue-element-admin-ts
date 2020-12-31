export function getLangs () {
  const langFiles = require.context('@/lang', true, /[a-z-]+\.ts$/, 'lazy')
  return langFiles.keys().map((fileName) => {
    return fileName.split('/').pop()!.replace(/\.ts$/, '')
  })
}

export const langNames = {
  'zh-cn': '简体中文',
  'en-us': 'English'
}
