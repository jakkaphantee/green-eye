const path = require('path')
const vueSrc = './src'

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, vueSrc),
        '@components': path.resolve(__dirname, vueSrc + '/components'),
        '@styles': path.resolve(__dirname, vueSrc + '/assets/styles')
      }
    }
  }
}