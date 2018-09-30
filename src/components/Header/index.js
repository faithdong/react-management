/*
 * @Author: zhongxd 
 * @Date: 2018-09-30 15:26:38 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-30 15:48:31
 * 头部组件
 */

import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="6" className="logo">
            <img src="/assets/logo-ant.svg" alt="" />
            <span>IMooc 通用管理系统</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;
