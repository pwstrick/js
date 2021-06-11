let full = "freedom";
function scope1(name = full) {
  return name;
}
console.log(scope1());
function scope2(name = en) {
  let en = "justify";
  return name;
}
scope2();

