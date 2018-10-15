/*
 * @Author: zhongxd 
 * @Date: 2018-10-12 17:34:59 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-15 17:54:10
 * 二级菜单
 */

import React from 'react';
import ThirdMenu from './ThirdMenu';
import './index.less'

export default class SecondMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    isShow:false
  }

  componentWillMount() {
    const secondeMenuNode = this.renderSecondMenu(this.props.secondMenuItem);
    this.setState({
      secondeMenuNode
    });
  }

  componentWillUpdate(nextProps,nextState){
    debugger;
    console.log("son----- cmt");
    console.log(nextProps);
    console.log(nextState);
  }
 
  componentWillReceiveProps(nextProps){
    debugger;
    console.log("son cmt")
    this.setState({isShow:nextProps.isShow});
    console.log(nextProps);
  }

  renderSecondMenu = (data) => {
    return data.map((item) => {
      if(item.children){
        return (
          <li className="u-menu-list" key={item.menuId}>
            <div className="menu-prop">
              <a className="child-title">{item.name}</a>
              <ThirdMenu thirdMenuItem={item.children}></ThirdMenu>
            </div>
          </li>
        )
      }
      return (
        <li className="u-menu-list" key={item.menuId}>
        <div className="menu-prop">
          <a className="child-title">{item.name}</a>
        </div>
      </li>
      )
    })
  }

  render() {
    return (
      <ul className="u-menu-vertical u-menu-sub submenu-list" style={{ display: (this.props.isShow)?'block':'none'}}>
        <li className="arrow-menu"></li>
        {this.state.secondeMenuNode}
      </ul>
    )
  }
}
