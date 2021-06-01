[x, y] = [1, 2];
console.log(x, y);
[y, x] = [1, 2];
console.log(x, y);

// 冒泡排序
var x = 1,
  y = 2;
[x, y] = [y, x];     //数组解构
console.log("解构冒泡", x, y);

var tmp = x;         //传统做法
x = y;
y = tmp;
console.log("传统冒泡", x, y);