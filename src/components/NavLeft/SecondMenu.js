/*
 * @Author: zhongxd 
 * @Date: 2018-10-12 17:34:59 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-12 17:40:51
 * 二级菜单
 */

 import React from 'react';
 import './index.less'
 export default class SecondMenu extends React.Component{

  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <ul className=" u-menu-vertical u-menu-sub submenu-list ">
          <li className="arrow-menu"></li>
          <li className="u-menu-list">
            <div className="menu-prop">
              <a className="child-title">{this.props.secondName}</a>
              <div className="third-menu-content">
                <ul className="third-menu-list">
                  <li><a>123</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
    )
  }
 }
