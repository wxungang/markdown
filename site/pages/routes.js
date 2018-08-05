/**
 * Created by xiaogang on 2017/4/16.
 */
"use strict";
import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  HashRouter
} from 'react-router-dom';


//主入口文件
import App from '../app.jsx';

//路由 页面 的加载（推荐单文件的写法）


//pages (site 文档页面 无需采用 脚手架中的懒加载 方式！尽量 以代码可读性为主！)
import Alert from './alert/alert.jsx';
import Loading from './loading/loading.jsx';
import List from './list/list.jsx';
import Quickstart from './quickstart/quickstart.jsx';


//懒加载方式


// 路由配置
const routes = [
  {path: "/", text: "Alert", component: Alert},
  {path: "/alert", text: "Alert", component: Alert},
  {path: "/loading", text: "Loading", component: Loading},
  {path: "/list", text: "List", component: List},
  {path: "/quickstart", text: "Quickstart", component: Quickstart},
];


//@formatter:off
const AppRouter = () => (
  <HashRouter>
    <App>
      {
        routes.map((page, index) => page.component ?
          <Route key={index} exact path={page.path} component={page.component}/> : "")
      }
    </App>
  </HashRouter>
);
//@formatter:on

export default AppRouter;
