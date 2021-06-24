var p1 = Promise.reject("error"), p2 = "fulfilled"; 
Promise.all([p1, p2]).catch(function (reason) {
   console.log(reason); 
});
