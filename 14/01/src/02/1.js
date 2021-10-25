import React from 'react';

// document.documentElement.addEventListener("click", function(e) {
//   console.log("html");
// });
// document.body.addEventListener("click", function(e) {
//   console.log("body");
// });
class Btn extends React.Component {
  handle1(e) {
    console.log("子元素");
  }
  handle2(e) {
    console.log("父元素");
  }
  render() {
    return (
      <div onClick={this.handle2}>
        <button onClick={this.handle1}>提交</button>
      </div>
    );
  }
}
export default Btn;