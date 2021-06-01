const date = [2018, 6, 9];
// 实参
const date1 = new Date(date[0], date[1], date[2]);
console.log(date1);
// 扩展运算符
const date2 = new Date(...date);
console.log(date2);
// 混合
const time = [10, 28];
const date3 = new Date(...date, ...time, 45); 
console.log(date3);