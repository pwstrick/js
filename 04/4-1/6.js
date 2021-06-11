let name = "freedom";
function scope1(name = name) {
  return name;
}
scope1();