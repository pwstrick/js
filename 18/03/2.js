function quickSort(arr) {
  var length = arr.length;
  //基线条件
  if (length <= 1) {
    return arr;
  }
  var base = arr[0],
    left = [], 			//保存小于基准元素的记录
    right = []; 		//保存大于基准元素的记录
  //求解
  for (let i = 1; i < length; i++) {
    if (base > arr[i]) {		//放入左边数组
      left.push(arr[i]);
    } else {					//放入右边数组
      right.push(arr[i]);
    }
  }
  //分解
  left = quickSort(left);
  right = quickSort(right);
  //合并
  return left.concat([base], right);
}

console.log("[3,5,1,6,4,7,2]", quickSort([3,5,1,6,4,7,2]));

