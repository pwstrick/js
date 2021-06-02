import {name, getName, people} from "./1.js";
console.log("第一种命名导出");
console.log(name);
console.log(getName());
console.log(new people().getName());

setTimeout(() => {
  console.log(name);
}, 5000);