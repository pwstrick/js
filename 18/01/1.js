function binarySearch(nums, target) {
  let low = 0,
	high = nums.length - 1;		//注意
  while(low <= high) {			//注意
    let mid = low + ((high - low) >> 1);
    if (nums[mid] == target) {
      return mid;				//注意
    } else if (nums[mid] < target) {
      low = mid + 1;			//注意
    } else if (nums[mid] > target) {
      high = mid - 1;			//注意
    }
  }
  return -1;					//注意
}

const arr = [1, 2, 3, 4, 5, 6];
console.log("查找2", binarySearch(arr, 2));
console.log("查找7", binarySearch(arr, 7));
