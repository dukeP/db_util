let path = require('path');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let UglifySJPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bd-util.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'bd-util'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['dist'] })]
};
