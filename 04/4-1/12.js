function func1() {
  console.log(typeof new.target);
} 
new func1(); 

function func2() {
  console.log(new.target === undefined);     //true 
} 
func2();
