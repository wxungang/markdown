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

//pages
import pages from './pages/index';

console.log(pages)


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

  handle = (e) => {
    console.log(e);
  }

  navDom = () => {
    let _navDom = '';
    for (let key in pages) {
      if (pages[key] instanceof Array) {
        continue;
      }
      _navDom += `<a class="component_parent">${key}</a>`;
      let _itemDom = '';
      for (let item in pages[key]) {
        if (typeof pages[key][item] == "string") {
          _itemDom += `<li class="nav-item"><a class="item" href="#/${item}">${item}</a></li>`
        } else {
          //components
          _itemDom += `<div class="component_group">`;
          _itemDom += `<a class="component_name">${item}</a>`;
          _itemDom += `<ul>`;
          for (let com in pages[key][item]) {
            _itemDom += `<li class="nav-item"><a class="item" href="#/${com}">${com}</a></li>`
          }
          _itemDom += `</ul>`;
          _itemDom += `</div>`;
        }

      }
      if (_itemDom.indexOf('<li') === 0) {
        _itemDom = ['<ul>', _itemDom, '</ul>'].join('');
      }
      _navDom += _itemDom;
    }

    return _navDom;
  }


  navEvents = () => {
    let _nav = document.getElementById("nav");
    console.log(_nav);
    _nav.addEventListener('click', function (ev) {
      console.log(ev);
      let target = ev.target || ev.srcElement;
      if (target.nodeName.toLowerCase() == 'a' && target.className.indexOf('item') >= 0) {
        console.log(target);
        console.log(target.className);
        document.getElementById("nav").querySelectorAll('a').forEach(item => item.className = item.className.replace('active', ''));
        target.className += ' active';
      }
    });
  }

  componentWillMount() {
    window.addEventListener("hashchange", () => {
      window.scrollTo(0, 0);

      console.log('hashchange');
    }, false);

    window.onload = function () {

    }
  }

  componentDidMount() {
    this.navEvents();
  }

  render() {
    console.log(this.props);
    let _navDom = this.navDom();
    return <div className="content react-content" id="content">
      <div className="nav" id="nav" dangerouslySetInnerHTML={{
        __html: _navDom
      }}/>
      <div className="demos" id="demos">
        <div className="phone">
          <iframe src="../demos/index.html"></iframe>
        </div>
      </div>
      <div className="page" id="page">
        {this.props.children}
      </div>
    </div>
    {/*<UI/>*/
    }
  }

}

