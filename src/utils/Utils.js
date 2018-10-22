/*
 * @Author: zhongxd 
 * @Date: 2018-10-22 11:34:57 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-10-22 17:08:50
 * 工具函数
 */

 class Utils {

  /**
   * 生成不重复uuid
   */
  static UUID(){
    let s = [];
    let hexDigits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 32; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    let uuid = s.join("");
    return uuid;
  }

  static setLocalStorage(key,value){
    return localStorage.setItem(key,JSON.stringify(value));
  }

  static getLocalStorage(key){
    return localStorage.getItem(key);
  }
 }

 export default Utils;
