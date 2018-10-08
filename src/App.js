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
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavLeft />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
