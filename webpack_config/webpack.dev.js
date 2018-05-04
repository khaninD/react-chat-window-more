const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('../webpack.common.js')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 9090
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})
