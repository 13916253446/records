
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const markdownConfig = require('../mardkown.config.js')
let resolve = dir => path.resolve(__dirname, dir)
let assetsArray = [resolve('../../website'), resolve('../../components'), resolve('../../app')]
module.exports = {
  entry: {
    main: [path.resolve(__dirname, '../../app/app.js')]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          cssSourceMap: true,
          cacheBusting: true,
          transformToRequire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: assetsArray,
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-markdown-loader',
            options: markdownConfig
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: file => 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: file => 'static/media/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: file => 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: resolve('../../app/index.html'),
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: process.env.NODE_ENV === 'production',
        collapseWhitespace: process.env.NODE_ENV === 'production',
        removeAttributeQuotes: process.env.NODE_ENV === 'production'
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue', '.jsx', '.css', '.scss', 'styl', 'sass', 'less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // 组件库的别名
      'components': path.resolve(__dirname, '../../components'),
      // 站点根节点的别名
      '@': path.resolve(__dirname, '../../website')
    }
  }
}
