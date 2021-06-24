var chain = new Promise(function(resolve, reject) {
  resolve(); 
}); 
chain.then(function(value) {
   return Promise.resolve("fulfilled");
}).then(function(value) {
   console.log(value);
   return Promise.reject("rejected");
})
.catch(function(reason) {
   console.log(reason);
});
