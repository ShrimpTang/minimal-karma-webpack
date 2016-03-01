
module.exports = function (config) {
  const tests = './src/**/*.spec.js';

  config.set({
    frameworks: ['jasmine'],
    files: [tests],
    preprocessors: {
      [tests]: ['webpack', 'sourcemap']
    },
    webpack: webpackConfig(),
    webpackMiddleware: {
      noInfo: true
    },
    colors: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });


};

function webpackConfig() {
  const config = require('./webpack.config.js');
  delete config.context;
  delete config.entry;
  delete config.output;
  delete config.devServer;

  return config;
}

