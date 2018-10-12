/*
 * @Author: zhongxd 
 * @Date: 2018-10-12 14:17:12 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-12 16:26:01
 * 统一封装http请求 ，拦截错误信息做统一处理
 */

 import axios from 'axios';
 export default class Axios {
   //es6新语法  定义静态方法
   static ajax(options){
    let baseApi = ' https://www.easy-mock.com/mock/5bc0395f83119c50b9e1a644/example/';
    return new Promise((resolve,reject)=>{
      axios({
        url:baseApi + options.url,
        method:'get',
        //baseUrl:baseApi,
        params: (options.data && options.data.params) || ''
      }).then((response)=>{
        resolve(response);
      })
    });
   }
 }