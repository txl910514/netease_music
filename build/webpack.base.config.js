/**
 * Created by txl-pc on 2017/7/21.
 */
var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var pngUse = [
  {
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
    }
  }
]

if (process.env.NODE_ENV !== 'dev') {
  pngUse.push('image-webpack-loader'); // 压缩图片
}
module.exports = {
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: utils.cssLoaders({
            extract: process.env.NODE_ENV !== 'dev'
          })
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /(node_modules|bower_components)/,
        use: pngUse
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.html$/,
        use: [

          {
          loader: 'html-loader',
          options: {
            minimize: process.env.NODE_ENV !== 'dev'
          }
        }],
      }
    ]
  },
  plugins: [
    // 加了这个 就可以在js用这个变量了
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"' + process.env.NODE_ENV + '"'
      }
    }),
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      "window.$":"jquery",
      "window.jQuery":"jquery"
    })
  ]
}