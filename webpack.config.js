var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './public/index.jsx',

  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],

  output: { 
    filename: './public/bundle.js', 
    path: __dirname, 
    publicPath: '/'
  },
  
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname), 
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};