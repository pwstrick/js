let tha = {
  then(resolve, reject) {
    resolve("thenable");
  }
};
//参数为空
Promise.resolve().then(function(value) {
  console.log(value);    //undefined
});
//参数为非thenable
Promise.resolve("string").then(function(value) {
  console.log(value);    //"string"
});
//参数为thenable
Promise.resolve(tha).then(function(value) {
  console.log(value);    //"thenable"
});
//参数为Promise
Promise.resolve(new Promise(function(resolve) {
  resolve("Promise");
})).then(function(value) {
  console.log(value);    //"Promise"
});