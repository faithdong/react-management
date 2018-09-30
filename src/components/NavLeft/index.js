/*
 * @Author: zhongxd 
 * @Date: 2018-09-30 15:54:56 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-30 16:00:54
 * 左侧导航菜单
 */

 import React from 'react';
 import { Row , Col , Menu} from 'antd';

 const MenuItem = Menu.Item;

 class NavLeft extends React.Component{

  render(){
    return(
      <div>
        <Row>
          <Col span={2}>
            <Menu theme="light">
              <MenuItem key="1">nav 1</MenuItem>
              <MenuItem key="2">nav 2</MenuItem>
              <MenuItem key="3">nav 3</MenuItem>
            </Menu>
          </Col>
          <Col span={22}></Col>
        </Row>
      </div>
    )
  }

 }

 export default NavLeft;
