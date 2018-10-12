/*
 * @Author: zhongxd 
 * @Date: 2018-09-30 15:54:56 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-12 17:47:06
 * 左侧导航菜单
 */

import React from 'react';
import MenuConfig from './../../config/menuConfig';
import Axios from './../../axios';
import SecondMenu from './SecondMenu';
//import Axios from 'axios';

import './index.less';


class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let options = {
      url: 'sidebarList'
    };
    let revPromise = Axios.ajax(options);

    revPromise.then((res) => {
      const menuTreeNode = this.renderMenu(res.data.data);
      this.setState({
        menuTreeNode
      });
    });
    //const menuTreeNode = this.renderMenu(MenuConfig);
    // this.setState({
    //   menuTreeNode
    // });

  }

  renderSecondMenu = (data) => {
    return data.map((item) => {
      return (
        <ul className=" u-menu-vertical u-menu-sub submenu-list ">
          <li className="arrow-menu"></li>
          <li className="u-menu-list">
            <div className="menu-prop">
              <a className="child-title">{item.name}</a>
              <div className="third-menu-content">
                <ul className="third-menu-list">
                  <li><a>{item.name}</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      )
    })
  }

  renderMenu = (data) => {
    return data.map((item) => {
      return (
        <ul className="u-menu u-menu-max1" key={item.key}>
          <li className="second-menu u-menu-submenu-vertical u-menu-submenu">
            <div className="u-menu-submenu-title">
              <a>{item.name}</a>
            </div>
            
            <SecondMenu secondeName={item.child}></SecondMenu>
          </li>
        </ul>
      )
    })
  }

  render() {
    return (
      <div className="sidebar-content">
        {this.state.menuTreeNode}
        {/* <ul className="u-menu u-menu-max1">
          <li className="second-menu u-menu-submenu-vertical u-menu-submenu">
            <div className="u-menu-submenu-title">
              <a>基础</a>
            </div>
            <ul className=" u-menu-vertical u-menu-sub submenu-list ">
              <li className="arrow-menu"></li>
              <li className="u-menu-list">
                <div className="menu-prop">
                  <a className="child-title">标题</a>
                  <div className="third-menu-content">
                    <ul className="third-menu-list">
                      <li><a>123</a></li>
                      <li><a>456</a></li>
                      <li><a>789</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul> */}
      </div>
    )
  }

}

export default NavLeft;
