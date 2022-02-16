const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  outputDir: path.resolve(__dirname, './dist'),
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new Dotenv({
        systemvars: true
      })
    ]
  }
}