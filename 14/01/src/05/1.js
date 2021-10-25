import React from 'react';
class Btn extends React.Component {
  handle(e, name) {
    console.log(e, name);
  }
  render() {
    return <button onClick={(e) => this.handle(e, "strick")}>提交</button>;
  }
}
export default Btn;