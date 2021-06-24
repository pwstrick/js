var promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve("成功执行");
  }, 500); 
});
promise.then(function(value) {
  setTimeout(() => {
    console.log(value);
  }, 500); 
});
