/*
 * @Author: zhongxd 
 * @Date: 2018-10-24 14:28:16 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-11-01 23:34:13
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
    this.state = {
      panes:[],
      activeKey: '#shouye'
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
            <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>
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
        return pane.key === targetKey.key;
      });
      if (hasTargetKey === false) {
        activeKey = targetKey.key;
        panes.push(targetKey);
        this.setState({ panes, activeKey });
      }
    } else {
      activeKey = `newTab${this.newTabIndex++}`;
      panes.push({ title: targetKey.title ? targetKey.title : 'New Tab', key: activeKey });
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
          onEdit={this.onEdit} 
          activeKey={this.state.activeKey}>
          <TabPane tab='首页' key='#shouye' closable={false}>这是首页</TabPane>
          {/* this.renderTabMenu(this.state.panes) */}
          {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
        </Tabs>
      </div>
    )
  }
}

export default TabsMenu;
