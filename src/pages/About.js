/*
 * @Author: zhongxd 
 * @Date: 2018-11-01 21:45:32 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-11-01 23:38:09
 */

 import React,{ Component } from 'react';

 import { Input } from 'antd';




 export default class About extends Component{

  testFun = () =>{
    console.log('about-test');
  }

	render(){
		return(
			<div> 
				<Input placeholder="Basic usage" />
			</div>
		)
	}
 }

// module.exports  = About;