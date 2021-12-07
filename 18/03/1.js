function mergeSort(arr) {
  let len = arr.length;
  //基线条件
  if (len < 2) {
    return arr;
  }
  //分解
  let middle = Math.floor(len / 2),
    left = mergeSort(arr.slice(0, middle)),
    right = mergeSort(arr.slice(middle));
  //合并
  return merge(left, right);
}
function merge(left, right) {
  let result = [];
  //求解
  while (left.length && right.length) {
	//小的在左，大的在右
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length)
    result.push(left.shift());
  while (right.length)
    result.push(right.shift());
  return result;
}

console.log("[8,7,6,5,4,3,2,1]", mergeSort([8,7,6,5,4,3,2,1]));

