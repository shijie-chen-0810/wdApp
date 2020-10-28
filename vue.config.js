module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network':'@/network',
        'views': '@/views',
        'utils': '@/utils',
        'store':'@/store'
      } 
    }
  },
  devServer: {
    proxy: {
      '/2013-12-26': {
        target: 'https://app.cloopen.com:8883',
        changeOrigin: true
      },
      '/users': {
        target: 'http://106.13.129.90:5000',
        changeOrigin: true
      },
      '/resource': {
        target: 'https://m.wandougongzhu.cn/',
        changeOrigin: true
      }
    }
  }
}
