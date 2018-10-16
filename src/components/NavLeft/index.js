/*
 * @Author: zhongxd 
 * @Date: 2018-09-30 15:54:56 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-16 17:28:56
 * 左侧导航菜单
 */

import React from 'react';
//import MenuConfig from './../../config/menuConfig';
import Axios from './../../axios';
import FirstMenu from './FirstMenu';
import SecondMenu from './SecondMenu';
import ThirdMenu from './ThirdMenu';
//import Axios from 'axios';

import './index.less';


class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: true };
  }

  componentWillMount() {
    this.reqBarList();
  }

  componentDidMount() {

  }

  reqBarList = () => {
    let options = {
      url: 'sidebarList'
    };
    let revPromise = Axios.ajax(options);

    revPromise.then((res) => {
      const menuTreeNode = this.renderMenu(res.data.data);
      this.setState({
        menuTreeNode
        //menuData: res.data.data
      });
    });
  }

  renderSecondMenu = (data) => {
    return data.map((item) => {
      return (
        <ul className=" u-menu-vertical u-menu-sub submenu-list" style={{ display: 'none' }}>
          <li className="arrow-menu"></li>
          <li className="u-menu-list">
            <div className="menu-prop">
              <a className="child-title" key={item.menuId}>{item.name}</a>
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

  handleMouseOver = () => {
    this.setState({ isShow: true });
    console.log("onMouseOver");
  }

  handleMouseOut = () => {
    console.log("onMouseOut");
  }

  handleMouseLeave = () => {
    this.setState({ isShow: false });
    console.log("onMouseLeave");
  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children && item.children != null) {
        return (
          <li className="second-menu u-menu-submenu-vertical u-menu-submenu" key={item.menuId}>
            <div className="u-menu-submenu-title">
              <a>{item.name}</a>
            </div>
            <ul className="u-menu-vertical u-menu-sub submenu-list" key={item.menuId}
              style={{ display: (this.props.isShow) ? 'block' : 'none' }}>
              <li className="arrow-menu"></li>
              {
                item.children != null ?
                  item.children.map((itemSecond) => {
                    return (
                      <li className="u-menu-list" key={itemSecond.key}>
                          <div className="menu-prop">
                            <a className="child-title">{itemSecond.name}</a>
                            <div className="third-menu-content">
                              <ul className="third-menu-list">
                                {
                                  itemSecond.children != null ?
                                    itemSecond.children.map((itemThird) => {
                                      return (
                                        <li key={itemThird.menuId} style={{ width: '120px' }}>
                                          <a>{itemThird.name}</a>
                                        </li>
                                      )
                                    })
                                    :
                                    ''
                                }
                              </ul>
                            </div>
                          </div>
                        </li>
                    )
                  })
                  :
                  ''
              }
            </ul>
          </li>
        )
      }
    })
  }

  render() {

    return (
      <div className="sidebar-content">
        <ul className="u-menu u-menu-max1">
          {this.state.menuTreeNode}
        </ul>
        
        {/* <FirstMenu
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}>
          <SecondMenu>
            <ThirdMenu></ThirdMenu>
          </SecondMenu>
        </FirstMenu> */}
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
