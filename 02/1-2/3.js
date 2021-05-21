function restrict1(...args, name) {
  //抛出语法错误
}

var obj = {
  set age(...value) {
    this._age = value;
  }
};