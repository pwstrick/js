function binarySearchHigh(nums, target) {
  let low = 0,
	high = nums.length - 1;
  while(low < high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] <= target) {		//注意
      low = mid + 1;				//注意
      if (nums[low] > target) 		//注意
        return mid;					//注意
    } else if (nums[mid] > target) {
      high = mid - 1;
    }
  }
  return nums[low] <= target ? low : -1;	//注意
}

console.log("---查找最后一个值等于给定值的元素---")
const arr4 = [1, 2, 2, 2, 5, 6];
console.log("查找最后一个2", arr4, binarySearchHigh(arr4, 2));
console.log("查找最后一个0", arr4, binarySearchHigh(arr4, 0));

const arr5 = [1, 1, 1, 1, 1, 2];
console.log("查找最后一个2", arr5, binarySearchHigh(arr5, 2));
console.log("查找最后一个0", arr5, binarySearchHigh(arr5, 0));

const arr6 = [1, 1, 2, 2, 5, 6];
console.log("查找最后一个2", arr6, binarySearchHigh(arr6, 2));