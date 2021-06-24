var p1 = new Promise(function(resolve) {
 setTimeout(() => {
    resolve("fulfilled");
 }, 200); 
}); 
var p2 = new Promise(function(resolve, reject) {
 setTimeout(() => {
    reject("rejected");
 }, 100); 
}); 
Promise.race([p1, p2]).catch(function (reason) {
   console.log(reason); 
});
