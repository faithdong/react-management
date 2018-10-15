/*
 * @Author: zhongxd 
 * @Date: 2018-10-15 14:10:51 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-15 15:03:49
 * 三级菜单
 */

import React from 'react';

import './index.less';

class ThirdMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount (){
    const thirdMenuNode = this.renderMenuThird(this.props.thirdMenuItem);
    this.setState({thirdMenuNode:thirdMenuNode});
  }

  renderMenuThird = (data) =>{
    return data.map( (item) => {
      return (
        <li key={item.menuId} style={{width:'120px'}}>
          <a>{item.name}</a>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="third-menu-content">
        <ul className="third-menu-list">
          {this.state.thirdMenuNode}
        </ul>
      </div>
    )
  }
}

export default ThirdMenu;
