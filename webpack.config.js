
module.exports = {
  entry: {
    'app': './index.html'
  },
  output: {
    filename: '[name].js',
    path: './build'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loaders: [
          'html-loader',
          'file-loader?name=[name].[ext]'
        ]
      }
    ]
  }
};
