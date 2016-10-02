const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel',
      },
    ],
  },
  resolve: {
    root: [
      path.resolve(APP_DIR),
    ],
    extensions: ['', '.js', '.jsx'],
  },
  externals: {
    Config: JSON.stringify(process.env.ENV === 'development' ? {
      serverUrl: 'http://localhost:5000',
    } : {
      serverUrl: 'https://bcycle.herokuapp.com',
    }),
  },
};

module.exports = config;
