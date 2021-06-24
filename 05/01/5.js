var error = new Promise(function(resolve, reject) {
   throw "error info"; 
}); 
error.catch(function(reason) {
   console.log(reason); 
});
