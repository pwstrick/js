var digits = [1, 2, 3];
function addDigit(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    arr[i] += 1;
  }
  return arr;
}
addDigit(digits);
console.log(digits);


