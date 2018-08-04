/**
 * Created by xiaogang on 2016/12/21.
 */
"use strict";
var webpack = require('webpack');
const CONFIG = require('./site/webpack/config');


var _ENV = CONFIG.env;
//默认获取dev环境
var webpackConfig = require('./site/webpack/webpack.dev');
if (_ENV == 'prod') {
  webpackConfig = require('./site/webpack/webpack.prod');
} else if (_ENV == 'server') {
  webpackConfig = require('./site/webpack/webpack.server');
}

console.log(webpackConfig);


module.exports = webpackConfig;
