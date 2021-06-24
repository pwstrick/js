var chain = new Promise(function(resolve, reject) {
   reject("error"); 
}); 
chain.then(null, function(reason) {
   console.log(reason); 
   return "end"; 
}) .then(function(value) {
   console.log(value); 
});
