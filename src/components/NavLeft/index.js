/*
 * @Author: zhongxd 
 * @Date: 2018-09-30 15:54:56 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-09 17:54:31
 * 左侧导航菜单
 */

import React from 'react';

import './index.less';


class NavLeft extends React.Component {

  render() {
    return (
      <div className="sidebar-content">
        <ul className="u-menu u-menu-max1">
          <li className="second-menu u-menu-submenu-vertical u-menu-submenu">
            <div className="u-menu-submenu-title">
              <a>基础</a>
            </div>
            <ul className="u-menu-vertical u-menu-sub u-menu-hidden submenu-list">
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
        </ul>
      </div>
    )
  }

}

export default NavLeft;
