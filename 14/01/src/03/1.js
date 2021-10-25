import React from 'react';
class Btn extends React.Component {
  handle(e) {
    console.log(e.type);         //"click"
    setTimeout(function() {
      console.log(e.type);       //null
    }, 0);
  }
  render() {
    return <button onClick={this.handle}>提交</button>;
  }
}
export default Btn;