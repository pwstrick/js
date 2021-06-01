var scope = "global";  
function outer1() {
 var scope = "outer";
 function inner(str) {
   var scope = "inner";
   console.log(str);
 }
 inner(`current ${scope}`); 
} 
outer1(); 　　
