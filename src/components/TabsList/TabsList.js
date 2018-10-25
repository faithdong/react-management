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
    menuItem: {}
  }

  componentWillReceiveProps(nextProps) {
    this.onEdit(nextProps.menuItem, "add");
  }


  renderTabMenu = (data) => {
    if (data) {
      return data.map((pane) => {
        if (pane) {
          return (
            <TabPane tab={pane.title} key={pane.key}></TabPane>
          )
        }
      })
    }
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = (targetKey) => {
    const panes = this.state.panes;
    let activeKey;
    if (targetKey) {
      let hasTargetKey = panes.some((pane) => {
        return pane.key === targetKey.menuId;
      });
      if (hasTargetKey === false) {
        activeKey = targetKey.menuId;
        panes.push({ title: targetKey.name ? targetKey.name : 'New Tab', key: activeKey });
        this.setState({ panes, activeKey });
      }
    } else {
      activeKey = `newTab${this.newTabIndex++}`;
      panes.push({ title: targetKey.name ? targetKey.name : 'New Tab', key: activeKey });
      this.setState({ panes, activeKey });
    }

  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  render() {
    return (
      <div>
        <Tabs
          hideAdd
          type="editable-card"
          onChange={this.onChange}
          onEdit={this.onEdit} >
          <TabPane tab="首页" key="5555" closable={false}></TabPane>
          {this.renderTabMenu(this.state.panes)}
        </Tabs>
      </div>
    )
  }
}

export default TabsMenu;
