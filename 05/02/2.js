Promise.reject("rejected").catch(function (reason) {
   console.log(reason); 
}); 
var p = Promise.resolve(); 
Promise.reject(p).catch(function (reason) {
  console.log(reason === p); 
});
