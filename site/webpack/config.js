/**
 * Created by xiaogang on 2016/12/29.
 */
"use strict";
var path = require('path');
var _ENV = process.env.NODE_ENV || "dev";//默认 dev
module.exports = {
  env: _ENV || 'dev',
  isProd: _ENV === "prod",
  projectRoot: path.resolve(__dirname, '../../'),//项目根目录
  folder: _ENV === "prod" ? "site" : "site-" + _ENV,//打包存放的文件夹
  publicPath: '',//html文件和webpack打包生成的js文件的引用路径
  dev: {},
  prod: {}
};


/**
 *
 *
 *
 *
 */
