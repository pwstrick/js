function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let curEnd = intervals[0],		//终点最小的区间
    count = 1;						//不重叠的区间数
  intervals.forEach((value) => {
    if (value[0] < curEnd[1]) {		//过滤起点比curEnd终点小的区间
      return;
    }
    count++;
    curEnd = value;
  });
  return count;
}

console.log("[ [1,2], [2,3], [3,4], [1,3] ]", eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]));
console.log("[ [1,2], [1,2], [1,2] ]", eraseOverlapIntervals([ [1,2], [1,2], [1,2] ]));
console.log("[ [1,2], [2,3] ]", eraseOverlapIntervals([ [1,2], [2,3] ]));

