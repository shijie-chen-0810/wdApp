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
      '/api': {
        target: 'https://app.cloopen.com:8883',
        changeOrigin: true
      },
    }
  }
}
