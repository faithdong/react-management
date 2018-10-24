/*
 * @Author: zhongxd 
 * @Date: 2018-09-30 15:54:56 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-22 17:32:47
 * 左侧导航菜单
 */

import React from 'react';
//import MenuConfig from './../../config/menuConfig';
import Utils from './../../utils/Utils';
import Axios from './../../axios';
import './index.less';


class NavLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: true };
  }

  componentWillMount() {
    let data = Utils.getLocalStorage("sidebarList");
    data = JSON.parse(data);
    if (data) {
      const menuTreeNode = this.renderMenu(data);
      this.setState({
        menuTreeNode,
      });
    } else {
      this.reqBarList();
    }

  }

  componentDidMount() {

  }

  //获取菜单列表
  reqBarList = () => {
    let options = {
      url: 'sidebarList'
    };
    let revPromise = Axios.ajax(options);

    revPromise.then((res) => {
      Utils.setLocalStorage("sidebarList", res.data.data);
      const menuTreeNode = this.renderMenu(res.data.data);
      this.setState({
        menuTreeNode,
        //menuData: res.data.data
      });
    });
  }

  /**
   * 方法里面的 1 和 2 都是 固定的，因为在html渲染时，都会生成固定模板
   */
  handleMouseOver = (e) => {
    //减去 <li className="arrow-menu" ></li>  只计算 <li className="u-menu-list"></li>生成了多少个
    let count = e.currentTarget.children[2].children.length;
    //先 block 显示， 否则在 计算时不能获取这个元素的高度
    e.currentTarget.children[2].style.display = "block";
    e.currentTarget.children[1].style.display = "block";
    if (count === 1) {
      this.disposeMenuShow(e);
      e.currentTarget.children[2].style.width = "432px";
    } else if (count === 2) {
      this.disposeMenuShow(e);
      e.currentTarget.children[2].style.width = "900px";
    } else {
      this.disposeMenuShow(e);
      e.currentTarget.children[2].style.width = "1400px";
    }
    //e.currentTarget.children[1].children[0].style.background = '#00936D';
    //e.currentTarget.children[1].style.display = "block"; // ---> 写在这里就不能 此元素的高度
  }

  handleMouseOut = (e) => {
    e.currentTarget.children[1].style.display = "none";
    e.currentTarget.children[2].style.display = "none";
  }

  renderThirdMenu = (item) => {
    let currentHeight = 0;
    let thirdMenuListPagesIndex = 0;
    let thirdMenuArray = [[], [], []];
    let tempMenuArray = [];
    let clientHeight = document.body.clientHeight;
    if (item[0].children === null) {
      return (
        <li className="u-menu-list" key={item.menuId}>
          <div className="menu-prop">
            <a className="child-title">{item[0].name}</a>
            <div className="third-menu-content">
              <ul className="third-menu-list">
                <li style={{ width: '120px' }}>
                  <a onClick={this.handleClick.bind(this, item[0])}>{item[0].name}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      )
    }
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
          <li className="u-menu-list">
            <div className="menu-prop">
              <a className="child-title">{itemSecond.name}</a>
              <div className="third-menu-content">
                <ul className="third-menu-list">
                  <li style={{ width: '120px' }}>
                    <a >{itemSecond.name}</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        )
      }
    });
    return thirdMenuArray.map((tItem) => {
      if (tItem.length > 0) {
        return (
          <li className="u-menu-list" key={Utils.UUID()}>
            {
              this.renderLastMenu(tItem)
            }
          </li>
        )
      }
    });
  }

  renderLastMenu = (dataItems) => {
    if (dataItems.length > 0) {
      return dataItems.map((item) => {
        if (item.children) {
          return (
            <div className="menu-prop" key={Utils.UUID()}>
              <a className="child-title">{item.name}</a>
              <div className="third-menu-content">
                <ul className="third-menu-list">
                  {
                    item.children != null ?
                      item.children.map((itemThird) => {
                        return (
                          <li key={itemThird.menuId} style={{ width: '120px' }}>
                            <a onClick={this.handleClick.bind(this, itemThird)}>{itemThird.name}</a>
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

  handleClick(item) {
    if (this.props.menuItemClick) {
      this.props.menuItemClick(item);
    }
  }

  //动态渲染 导航菜单
  renderMenu = (data) => {
    return data.map((item, index) => {
      if (item.children && item.children != null) {
        return (
          <li className="second-menu u-menu-submenu-vertical u-menu-submenu"
            key={item.menuId}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}>
            <div className="u-menu-submenu-title" >
              <a>{item.name}</a>
            </div>
            <span className="arrow-menu" style={{ display: 'none' }}></span>
            <ul className="u-menu-vertical u-menu-sub submenu-list"
              style={{ display: 'none' }}>
              {
                this.renderThirdMenu(item.children)
              }
            </ul>
          </li>
        )
      } else {
        return (
          <li className="second-menu u-menu-submenu-vertical u-menu-submenu"
            key={item.menuId}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}>
            <div className="u-menu-submenu-title" >
              <a>{item.name}</a>
            </div>
            <span className="arrow-menu" style={{ display: 'none' }} ></span>
            <ul className="u-menu-vertical u-menu-sub submenu-list"
              style={{ display: 'none' }}>
              <li className="u-menu-list">
                <div className="menu-prop">
                  <a className="child-title">{item.name}</a>
                  <div className="third-menu-content">
                    <ul className="third-menu-list">
                      <li style={{ width: '120px' }}>
                        <a onClick={this.handleClick.bind(this, item)}>{item.name}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        )
      }
    })
  }

  //处理菜单项显示 高度
  disposeMenuShow = (el) => {
    let clientHeight = document.body.clientHeight;//浏览器可见高度
    let menuHeight = clientHeight - 64; //64 是头部所占的高度--> 内容区(包含菜单)实际的高度
    let menuElTop = el.currentTarget.offsetTop; //(二级菜单)元素距离顶部距离
    let ulEleHeight = el.currentTarget.children[2].offsetHeight; //(三级菜单) 高度

    //这里是处理 菜单项很多的时候，需要调整菜单 显示位置
    if (menuHeight < (menuElTop + ulEleHeight)) {
      let bottomHeight = menuHeight - menuElTop;
      let overflowHeight = ulEleHeight - bottomHeight;
      if (bottomHeight < menuElTop) {
        el.currentTarget.children[2].style.top = '-' + overflowHeight + 'px';
      } else {
        el.currentTarget.children[2].style.top = '-' + menuElTop + 'px';
      }

    }
  }

  render() {
    return (
      <div className="sidebar-content">
        <ul className="u-menu u-menu-max1">
          {this.state.menuTreeNode}
        </ul>
      </div>
    )
  }

}

export default NavLeft;
