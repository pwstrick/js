var func = new Function("a", "b", "return a+b;"); 
console.log(func.name);         

var expression1 = function() { };
console.log(expression1.name);
var expression2 = function named() { };
console.log(expression2.name);   