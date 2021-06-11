var operator1 = 0 || () => 2;
var operator2 = 0 || (() => 2);
console.log(operator2);
var operator3 = 0 || (() => 2)(); 
console.log(operator3);