/**
 * Created by xiaogang on 2017/4/15.
 *
 */
"use strict";

//解决低版本的兼容性问题 babel-polyfill
import 'core-js';
//base
import React from 'react';
import ReactDom from 'react-dom';

//redux
// import {connect, Provider} from 'react-redux'
// import store from './store/index';


//react-route
import AppRoutes from './pages/routes';


//render with redux
// ReactDom.render(
//   <Provider store={store}>
//     <AppRoutes/>
//   </Provider>,
//   document.getElementById('root')
// );

//render just react-routes
ReactDom.render(
  <AppRoutes/>,
  document.getElementById('root')
);


