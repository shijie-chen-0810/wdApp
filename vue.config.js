const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network':'@/network',
        'views':'@/views'
      } 
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('@c', path.resolve(__dirname, './src/components'))
      .set('@a', path.resolve(__dirname, './src/assets'))
      .set('@v', path.resolve(__dirname, './src/views'))
      .set('@u', path.resolve(__dirname, './src/utils'))
  }
}
