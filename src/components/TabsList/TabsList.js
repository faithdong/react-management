/*
 * @Author: zhongxd 
 * @Date: 2018-10-24 14:28:16 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-24 15:30:04
 * 标签页
 */

import React from 'react';
import { Tabs } from 'antd';
import './TabsList.less';
const TabPane = Tabs.TabPane;

class TabsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  static defaultProps = {
    menuItem:{}
  }

  componentWillReceiveProps(nextProps){
    debugger
    console.log(nextProps);
  }
  

  renderTabMenu = (data)=>{
    if(data){
      return data.map( (pane) =>{
        if(pane){
          return(
            <TabPane tab={pane.title} key={pane.key}></TabPane>
          )
        }
      })
    }
  }

  onEdit = (targetKey, action) => {
    debugger;
    this[action](targetKey);
  }

  add = () =>{
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <div>
        <Tabs
          type="editable-card"
          onEdit={this.onEdit} >
          <TabPane tab="首页" key="5555" closable={false}></TabPane>
            {this.renderTabMenu(this.state.panes)}
        </Tabs>
      </div>
    )
  }
}

export default TabsMenu;
