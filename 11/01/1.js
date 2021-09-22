/*
 * @Author: strick
 * @LastEditors: strick
 * @Date: 2021-09-22 14:48:18
 * @LastEditTime: 2021-09-22 14:49:33
 * @Description: 
 * @FilePath: /strick/js/11/01/1.js
 */
var digits = [1, 2, 3];
function addDigit(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    arr[i] += 1;
  }
  return arr;
}
addDigit(digits);
console.log(digits);       //[2, 3, 4]


