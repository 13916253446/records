
const webpackMerge = require('webpack-merge')
const webpackCommon = require('./webpack.config.base.js')
const webpack = require('webpack')
const prodConfig = require('./config.js').prod
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
let styleLoaders = require('../utils.js').styleLoaders

let currentConfig = {
  mode: 'production',
  output: {
    path: prodConfig.assetsRoot,
    filename: 'js/[name].[chunkhash:7].js',
    chunkFilename: 'js/async/[name].[chunkhash:7].js',
    publicPath: prodConfig.publicPath,
    crossOriginLoading: 'anonymous'
  },
  module: {
    rules: styleLoaders({ sourceMap: prodConfig.cssSourceMap, usePostCSS: true, extract: true })
  },
  optimization: {
    'minimizer': [
      new uglifyjsWebpackPlugin({
        parallel: true,
        sourceMap: false
      })
    ],
    'noEmitOnErrors': true,
    'runtimeChunk': {
      name: 'runtime'
    },
    'splitChunks': {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        },
        asynccommons: {
          name: 'asynccommons',
          chunks: 'async',
          minChunks: 2,
          minSize: 1024 * 10
        }
      }
    }
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:7].css'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}

//  是否需要分析npm包
if (process.env.anlyze_packages) {
  let bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
    analyzerPort: 8880,
    openAnalyzer: false
  })
  currentConfig.plugins.push(bundleAnalyzerPlugin)
}

module.exports = webpackMerge(webpackCommon, currentConfig)
