/**
 * Created by xiaogang on 2017/7/12.
 */
"use strict";
//base
import React from 'react';
import PropTypes from 'prop-types';

//style base
require("./style/page.less");

//component
// import UI from './store/container/uiContainer';


export default class App extends React.Component {
  //初始化 组件 属性和状态
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {
      msg: "site react"
    };
  }


  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  }

  render() {
    console.log(this.props);
    return <div className="react-content">
      {this.props.children}
      {/*<UI/>*/}
    </div>
  }

}

