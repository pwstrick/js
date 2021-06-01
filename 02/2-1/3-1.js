let arr1 = [1, 2, 3],
  arr2,
  arr3;
arr2 = [...arr1];              //复制数组
arr3 = [...arr1, ...arr2];     //合并数组

console.log(arr1);
console.log(arr2);
console.log(arr3);