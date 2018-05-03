const path = require('path')

module.exports = {
  entry: {
    bundle: [ 'babel-polyfill', './src/code-block.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css|.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /(\.js|.jsx$)/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|svg)$/,
        options: {
          limit: 10000,
          name: './img/[name].[ext]'
        },
        loader: 'url-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        options: {
          outputPath: './fonts/'
        },
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.css', '.scss' ]
  }
}
