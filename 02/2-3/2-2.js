[, , z] = [1, 2, 3]; 
console.log(z); 

// 注意点
[x, y] = NaN; 
[x, y] = undefined; 
[x, y] = null;

[x, ...y] = [1, 2, 3];
console.log(x);
console.log(y);