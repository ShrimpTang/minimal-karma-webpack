var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': './index.js',
    'app.test': './index.test.js'
  },
  output: {
    filename: '[name].js',
    path: './build'
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      chunks: ['app.test'],
      filename: 'index.test.html'
    })
  ],
  module: {
    loaders: []
  }
};
