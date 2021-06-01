var name = "strick",
 age = 29, str;
str = "My name is \"" + name + "\". My age is " + age + ".";
console.log("传统拼接", str);
str = `My name is "${name}". My age is ${age}.`; 　　　　  
console.log("模板方式", str);  