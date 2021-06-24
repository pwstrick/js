let tha = {
 then(resolve, reject) {
   reject("thenable");
 } 
};
Promise.resolve(tha) 
.catch(function(reason) {
   console.log(reason);
}).then(function() {
   console.log("end"); 
});
