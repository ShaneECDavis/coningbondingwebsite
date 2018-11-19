const isDev = process.env.NODE_ENV === 'development'

const HtemlWebPackPlugin = require('html-webpack-plugin')


let path = require('path')
let nodeExternals = require('webpack-node-externals')
const moduleObj = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: 'babel-loader'
    }
  ]
}
const client = {
  mode: isDev ? 'development' : 'production',
  entry: {
    client: './src/client/index.js'
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: moduleObj,
  plugins: [
    new HtemlWebPackPlugin({
      template: 'src/client/index.html'
    })
  ]
}
const server = {
  mode: isDev ? 'development' : 'production',
  entry: {
    server: './src/server/index.js'
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: moduleObj,
  externals: [nodeExternals()]
}
module.exports = [client, server]
