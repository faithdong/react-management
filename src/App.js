import 'babel-polyfill';
import React, { Component } from 'react';
import {Row , Col} from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';

import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <Row style={{height:'64px'}}>
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row className="content">
          <Col span={4}>
            <NavLeft />
          </Col>
          <Col span={20}></Col>
        </Row>
      </div>
    );
  }
}

export default App;
