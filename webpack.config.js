var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app': './index.js'
  },
  output: {
    filename: '[name].js',
    path: './build'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets=es2015'
      }
    ]
  }
};
