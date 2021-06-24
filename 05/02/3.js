var p1 = Promise.resolve(200), p2 = "fulfilled"; 
Promise.all([p1, p2]).then(function (value) {
   console.log(value); 
});
