


let config = require('./config.js').dev;
let styleLoaders = require('./utils.js').styleLoaders;
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.js');
const errorOverlayWebpackPlugin = require("error-overlay-webpack-plugin");
const friendlyErrorPlugin = require('friendly-errors-webpack-plugin');
const path = require('path')
const packageConfig = require('../package.json')
const notifier = require('node-notifier')

const devWebpackConfig = {
  mode: 'development',
  stats: false,
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: '[name]/static/js/[name].js',
    chunkFilename: '[name][hash:6].js',
  },
  module: {
    rules: styleLoaders({ sourceMap: config.cssSourceMap, usePostCSS: true })
  },
  devServer: {
    host: '0.0.0.0',
    port: config.port,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    contentBase: config.assetsRoot,
    quiet: true
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.devtool,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.defineEnv
    }),
    new friendlyErrorPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${config.port}`]
      },
      onErrors (severity, errors) {
        if (severity !== 'error') return

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
          title: packageConfig.name,
          message: severity + ': ' + error.name,
          subtitle: filename || '',
          icon: path.join(__dirname, 'logo.jpg')
        })
      },
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: []
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackBar(),
    new webpack.HotModuleReplacementPlugin(),
    new errorOverlayWebpackPlugin()
  ]
};
module.exports = webpackMerge(webpackBaseConfig, devWebpackConfig);