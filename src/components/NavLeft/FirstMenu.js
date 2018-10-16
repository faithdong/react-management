/*
 * @Author: zhongxd 
 * @Date: 2018-10-15 14:22:08 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-16 16:39:14
 * 一级菜单
 */

import React from 'react';
import Axios from './../../axios';

class FirstMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    //const firstMenuItem = this.renderFirstMenu(this.props.firstMenuItem);
    //this.setState({firstMenuItem});
  }

  renderFirstMenu = (data) => {
    return data.map((item) => {
      return (
        <li className="second-menu u-menu-submenu-vertical u-menu-submenu"
          key={item.menuId}>
          <div className="u-menu-submenu-title">
            <a>{item.name}</a>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <li className="second-menu u-menu-submenu-vertical u-menu-submenu"
        key={this.props.menuId}>
        <div className="u-menu-submenu-title">
          <a>{this.props.name}</a>
        </div>
      </li>
    )
  }
}

export default FirstMenu;