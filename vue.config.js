module.exports = {
  devServer: {
    // 此时不能使用ts
    before: require('./mock/mock-server.js')
  },
  pluginOptions: {
    i18n: {
      locale: 'zh-cn',
      fallbackLocale: 'zh-cn',
      localeDir: 'lang',
      enableInSFC: true
    }
  }
}
