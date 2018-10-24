import 'babel-polyfill';
import React, { Component } from 'react';
import {Row , Col} from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import TabsList from './components/TabsList/TabsList';

import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  handleClickMenuItem(menuItem){
    console.log(menuItem);
    this.setState({menuItem});
  }
  render() {
    return (
      <div>
        <Row style={{height:'64px'}}>
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row className="content">
          <Col span={2} className="menu-left">
            <NavLeft menuItemClick={this.handleClickMenuItem.bind(this)}/>
          </Col>
          <Col span={22} className="cmt-right">
            <TabsList menuItem={this.state.menuItem}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
