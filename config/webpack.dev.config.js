const fs = require('fs')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PORT = 3001

module.exports = merge(baseConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: './config/index.html',
      // filename: './index.html',
    }),
  ],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    contentBase: path.resolve('public'),
  },
  optimization: {
    moduleIds: 'named',
  },
})
