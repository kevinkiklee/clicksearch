var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    background: './lib/background.js',
    inject: './lib/inject.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
