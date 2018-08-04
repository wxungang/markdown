/**
 * Created by xiaogang on 2016/12/21.
 */
"use strict";
var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');

var baseConfig = require('./webpack.base.js');

var devConfig=merge.smart(baseConfig,{

});


module.exports = devConfig;
