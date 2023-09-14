const { merge } = require('webpack-merge');
const base = require('./webpack.base');
const path = require('path');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  optimization: {
    runtimeChunk: 'single'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../static/images'),
      publicPath: '/images'
    },
    port: 7777
  },
});
