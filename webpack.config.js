var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader : 'babel'
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(APP_DIR)
    ],
    extensions: ['', '.js']
  },
  externals: {
    'Config': JSON.stringify(process.env.ENV === 'development' ? {
      serverUrl: "http://localhost:5000"
    } : {
      serverUrl: "https://bcycle.herokuapp.com"
    })
  }
};

module.exports = config;
