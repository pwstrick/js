function expression1(name, full = "pw" + name) {
 return full; 
} 
console.log(expression1("strick")); 
console.log(expression1("freedom")); 


function expression2(name = full, full) {
 return name; 
} 
expression2(undefined, "strick");      