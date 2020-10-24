
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
  devServer: {
    proxy: {
      '/2013-12-26': {
        target: 'https://app.cloopen.com:8883',
        changeOrigin: true
      }
    }
  }
}
