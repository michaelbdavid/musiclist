const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'react-hot-loader/babel',
    'webpack-hot-middleware/client',
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    './index.jsx',
  ],
  // output: {
  //   filename: 'build.js',
  //   path: resolve(__dirname, 'public', 'javascripts'),
  //   publicPath: '/javascripts',
  // },
  output: {
    filename: 'build.js',
    path: '/',
    publicPath: '/javascripts',
  },
  // devServer: {
  //   hot: true,
  //   contentBase: resolve(__dirname, ''),
  //   publicPath: '/javascripts',
  // },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
