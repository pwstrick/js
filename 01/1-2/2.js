function repeat() {
  let a = 1;
  let a = 2;
  function inner() {
    let a = 3;
  }
  inner();
}
repeat();
