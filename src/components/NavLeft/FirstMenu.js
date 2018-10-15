/*
 * @Author: zhongxd 
 * @Date: 2018-10-15 14:22:08 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-15 14:37:03
 * 一级菜单
 */

import React from 'react';

class FirstMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount (){
    debugger;
    const firstMenuNode = this.renderFirstMenu(this.props.firstMenuItem);
    this.setState({firstMenuNode});
  }

  renderFirstMenu = (data) => {
    return data.map((item) => {
      return (
        <li className="second-menu u-menu-submenu-vertical u-menu-submenu" key={item.menuId}>
          <div className="u-menu-submenu-title">
            <a>{item.name}</a>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="u-menu u-menu-max1">
        {this.state.firstMenuItem}
      </ul>
    )
  }
}

export default FirstMenu;