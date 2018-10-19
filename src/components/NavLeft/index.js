/*
 * @Author: zhongxd 
 * @Date: 2018-09-30 15:54:56 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-16 17:48:35
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
        menuTreeNode,
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

  handleMouseOver = (e) => {
    e.currentTarget.children[1].style.display = "block";
    e.currentTarget.children[1].style.width = "1400px";
  }

  handleMouseOut = (e) => {
    e.currentTarget.children[1].style.display = "none";
  }

  renderThirdMenu = (item) => {
    let currentHeight = 0;
    let thirdMenuListPagesIndex = 0;
    let thirdMenuArray = [[], [], []];
    let tempMenuArray = [];
    let clientHeight = document.body.clientHeight;
    item.map((itemSecond) => {
      if (itemSecond && itemSecond.children && itemSecond.children.length > 0) {
        currentHeight = (itemSecond.children.length / 3) * 25 + 52 + currentHeight;
        if (currentHeight > clientHeight - 64) {
          thirdMenuListPagesIndex = thirdMenuListPagesIndex + 1;
          currentHeight = 0;
          tempMenuArray = [];
          tempMenuArray = tempMenuArray.concat(itemSecond);
          thirdMenuArray[thirdMenuListPagesIndex].push(itemSecond);
        } else {
          tempMenuArray = tempMenuArray.concat(itemSecond);
          thirdMenuArray[thirdMenuListPagesIndex] = tempMenuArray;
        }
      } else {
        return (
          <li className="u-menu-list" key={itemSecond.menuId}>
            <div className="menu-prop">
              <a className="child-title">{itemSecond.name}</a>
              <div className="third-menu-content">
                <ul className="third-menu-list">
                  <li key={itemSecond.menuId} style={{ width: '120px' }}>
                    <a>{itemSecond.name}</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        )
      }
    });

    return thirdMenuArray.map((tItem, index) => {
      if (tItem.length > 0) {
        return (
          <li className="u-menu-list" key={index}>
            {
              this.renderLastMenu(tItem)
            }
          </li>
        )
      }
    });
    /* return thirdMenuArray.map((itemSecond) => {
      if (itemSecond.children) {
        return (
          <li className="u-menu-list" key={itemSecond.menuId}>
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
      }
    }) */

  }

  renderLastMenu = (dataItems) => {
    if (dataItems.length > 0) {
      return dataItems.map((item) => {
        if (item.children) {
          return (
            <div className="menu-prop">
              <a className="child-title">{item.name}</a>
              <div className="third-menu-content">
                <ul className="third-menu-list">
                  {
                    item.children != null ?
                      item.children.map((itemThird) => {
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
          )
        }
      })
    }
  }

  //动态渲染 导航菜单
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children && item.children != null) {
        return (
          <li className="second-menu u-menu-submenu-vertical u-menu-submenu"
            key={item.menuId}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}>
            <div className="u-menu-submenu-title" >
              <a>{item.name}</a>
            </div>
            <ul className="u-menu-vertical u-menu-sub submenu-list"
              style={{ display: 'none' }}>
              <li className="arrow-menu"></li>
              {
                this.renderThirdMenu(item.children)
                /* item.children && item.children.length > 0 ?
                  item.children.map((itemSecond) => {
                    if (itemSecond.children && itemSecond.children.length > 0) {
                      currentHeight = (itemSecond.children.length / 3) * 25 + 52 + currentHeight;
                      if (currentHeight > clientHeight - 64) {
                        thirdMenuListPagesIndex = thirdMenuListPagesIndex + 1;
                        currentHeight = 0;
                        thirdMenuArray[thirdMenuListPagesIndex].push(itemSecond.children);
                      } else {
                        thirdMenuArray[thirdMenuListPagesIndex].push(itemSecond.children);
                      }
                    } */


                /* return (
                  <li className="u-menu-list" key={itemSecond.menuId}>
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
              ''*/
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
