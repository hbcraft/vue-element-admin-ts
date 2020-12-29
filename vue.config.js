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
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 100000,
        maxSize: 200000,
        chunks: 'all',
        maxInitialRequests: 10,
        maxAsyncRequests: 10
      }
    }
  }
}
