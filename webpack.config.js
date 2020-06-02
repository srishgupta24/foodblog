var webpack = require('webpack');
var path = require('path');
var {resolve} = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['app', 'node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'], exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ],
  },
};
