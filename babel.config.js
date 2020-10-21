module.exports = {
  // presets：预设，一组plugin
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],

  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}