/*
 * @Author: zhongxd 
 * @Date: 2018-10-12 17:34:59 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-16 17:03:27
 * 二级菜单
 */

import React from 'react';
import './index.less'

export default class SecondMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static defaultProps = {
    isShow: false
  }

  componentWillMount() {

  }

  componentWillUpdate(nextProps, nextState) {
    console.log("son----- cmt");
    console.log(nextProps);
    console.log(nextState);
  }

  componentWillReceiveProps(nextProps) {
    console.log("son cmt")
    this.setState({ isShow: nextProps.isShow });
    console.log(nextProps);
  }

  renderSecondMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <li className="u-menu-list" key={item.menuId}>
            <div className="menu-prop">
              <a className="child-title">{item.name}</a>
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
      <li className="u-menu-list" key={this.props.menuId}>
        <div className="menu-prop">
          <a className="child-title">{this.props.name}</a>
        </div>
      </li>
      
    )
  }
}
