(function() {
  func("strick");
  if(true) {
    console.log(func("freedom"));
    function func(name) {
      return name;
    }
    {
        console.log(func("jane"));
    }
  }
  console.log(func("justify"));
})();