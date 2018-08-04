/**
 * Created by xiaogang on 2016/12/21.
 */
"use strict";
var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');

var baseConfig = require('./webpack.base.js');

var serverConfig = merge.smart(baseConfig, {
  mode: 'development',
  devServer: {
    proxy: {
      // 凡是 `/uci-pre` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/uci-pre/*': {
        target: 'http://127.0.0.1:1111', //http://127.0.0.1:3000
        secure: false,
        changeOrigin: true
      }
    },
    historyApiFallback: true,
    noInfo: true,
    // clientLogLevel: "error",//只打印错误信息
    hot: true,
    host: '0.0.0.0',
    port: 9000,
    open: true,// 自动打开浏览器
    contentBase: path.resolve(__dirname, './build'),//可以使用数组模式匹配多个目录
    headers: {
      headerInfo: 'webpack-network-headers'
    },
    publicPath: '/'
  },
  plugins: [
    // Webpack 1.0
    // new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});


module.exports = serverConfig;
