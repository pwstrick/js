/*
 * @Author: strick
 * @LastEditors: strick
 * @Date: 2021-10-08 14:58:49
 * @LastEditTime: 2021-10-08 15:04:14
 * @Description: 
 * @FilePath: /strick/js/12/02/src/03/1.js
 */
import React from 'react';
const timeout = setInterval(() => {
  console.log("timeout");
}, 5000);
class Btn extends React.Component {
  componentWillUnmount() {
    clearInterval(timeout);
  }
  render() {
    return <div></div>;
  }
}
export default Btn;