function binarySearchLow(nums, target) {
  let low = 0,
	high = nums.length - 1;
  while(low < high) {			//注意
    let mid = low + ((high - low) >> 1);
    if (nums[mid] == target) {
      high = mid - 1;				//注意
	  if (nums[high] != target)		//注意
        return mid;					//注意
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    }
  }
  return nums[low] == target ? low : -1;	//注意
}

console.log("---查找第一个值等于给定值的元素---")
const arr1 = [1, 2, 2, 2, 5, 6];
console.log("查找第一个2", arr1, binarySearchLow(arr1, 2));
console.log("查找第一个0", arr1, binarySearchLow(arr1, 0));

const arr2 = [1, 1, 1, 1, 1, 2];
console.log("查找第一个2", arr2, binarySearchLow(arr2, 2));
console.log("查找第一个0", arr2, binarySearchLow(arr2, 0));

const arr3 = [1, 1, 2, 2, 5, 6];
console.log("查找第一个2", arr3, binarySearchLow(arr3, 2));






