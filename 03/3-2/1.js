let chain = {}, proto; 
Object.setPrototypeOf(chain, { name: "freedom" }); 
proto = Object.getPrototypeOf(chain); 
console.log(proto === chain.__proto__); 
