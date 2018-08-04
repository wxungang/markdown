/**
 * Created by xiaogang on 2016/12/21.
 */
"use strict";
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const RemoveWebpackPlugin = require('remove-webpack-plugin');

var CONFIG = require('./config');
var projectRoot = CONFIG.projectRoot || path.resolve(__dirname, '../');
var _ENV = CONFIG.env || 'dev';//prod
var _buildFolder = CONFIG.folder;
var isProd = _ENV === 'prod';

module.exports = {
  bail: true,
  mode: _ENV != 'prod' ? 'development' : 'production',
  devtool: _ENV != 'prod' ? '#eval-source-map' : false,
  context: __dirname,
  entry: {
    app: path.join(projectRoot, './site/app.js'),
  },
  output: {
    path: path.join(projectRoot, './build/' + _buildFolder),
    publicPath: '',//'./build/'+_buildFolder+'/',//path.join(__dirname, '../src/build/dev/')
    filename: '[name].[hash].js',
    chunkFilename: 'chunks/[name].[hash].js'
  },
  resolve: {
    alias: {
      //'vue$': 'vue/dist/vue.common.js',
      //'vue-router$': 'vue-router/dist/vue-router.common.js',
    },
    mainFiles: ["index", "app"],
    extensions: [".js", ".json", 'jsx', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        // exclude: path.resolve(__dirname, '../src/common'),
        loader: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: !isProd
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: !isProd
            }
          }]
      },
      {
        test: /\.(svg|ttf|eot|woff|otf)(\?.+)?$/,
        loader: 'file-loader',
      },
      {
        //内联处理。 图片不能被file-loader同时处理
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.md$/,
        loader : 'raw-loader'
      }
    ]
  },
  plugins: [
    new RemoveWebpackPlugin([path.join(projectRoot, './build/' + _buildFolder)]),
    //注入一些全局变量
    // new webpack.DefinePlugin({
    //   _VERSION_: JSON.stringify("1.0.0")
    // }),
    //可以和entry文件联合配置
    new HtmlWebpackPlugin({
      //inject: false,
      title: '',
      //filename: 'index.html',
      template: '../template.ejs',
      // scripts: ['./reactCommon.js', './app.js']
    })]
};

