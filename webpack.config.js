var webpack = require('webpack');
var path = require('path');

// var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'public');

var config = {
  entry: [
    'webpack-hot-middleware/client',
    "babel-polyfill",
    APP_DIR + '/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'public/js')
    },
    // CSS
    {
      test: /\.css$/,
      include: path.join(__dirname, 'public/css'),
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.css$/,
      include: path.join(__dirname, 'public/dist'),
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(ttf|eot|woff|woff2|svg|png)$/,
      loader: 'file-loader',
      include: path.join(__dirname, 'public/dist')
    },
    ]
  }
};

module.exports = config;
