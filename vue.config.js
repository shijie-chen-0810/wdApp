const path = require('path')

module.exports = {
  // vue-cli包装的Webpack的链式配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('@c', path.resolve(__dirname, './src/components'))
      .set('@a', path.resolve(__dirname, './src/assets'))
      .set('@v', path.resolve(__dirname, './src/views'))
      .set('@u', path.resolve(__dirname, './src/utils'))
      .set('@f', path.resolve(__dirname, './src/filters'))
  }
}
