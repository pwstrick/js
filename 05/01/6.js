var error = new Promise(function(resolve, reject) {
   resolve(); 
   throw "error info"; 
}); 
error.catch(function(reason) {
   console.log(reason); 
});
