const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./src/main.js'], // ['babel-polyfill', './src/main.js']
  output: {
    path: path.join(__dirname, '/www'),
    filename: 'bundle.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }, {
        test: /\.pug$/,
        loader: 'pug-loader'
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.pug'
    })
  ],
  devtool: 'source-map', // Either 'source-map' or 'cheap-source-map'
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src/'),
      'vue$': 'vue/dist/vue.common.js' // Vue alias for CommonJS module
    }
  },
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, '/www')
  }
}
