const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  stats: 'minimal',
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanTerminalPlugin()
  ]
};
