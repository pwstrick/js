function func1(name = "strick", age) {
  return name;
}
function func2(name, age = 28) {
  return age;
}
console.log(func1(undefined));
console.log(func2("strick")); 