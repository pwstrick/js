function age() { } 
console.log(age.bind(this).name);        

var obj = {
  get age() { },
  set age(value) { }
};
var descriptor = Object.getOwnPropertyDescriptor(obj, "age"); 
console.log(descriptor.get.name);
console.log(descriptor.set.name); 