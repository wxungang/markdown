/**
 * Created by xiaogang on 2016/12/21.
 */
"use strict";
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const MinifyPlugin = require("babel-minify-webpack-plugin");

console.log(JSON.stringify(baseConfig.module.rules));
const prodConfig = merge.smart(baseConfig, {
  devtool: false,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: "string-replace-loader",
            options: {
              search: "@replaceStart[\\w\\W\\s]*?@replaceEnd",//webpack 或者插件bug 吧 [\w\W\s] 无效会转化为 [wWs]
              replace: "苦逼的开发环境...",
              flags: 'g'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MinifyPlugin({
      removeConsole: true
    })
  ]

});

module.exports = prodConfig;
