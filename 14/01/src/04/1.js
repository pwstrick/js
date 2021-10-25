import React from 'react';
class Btn extends React.Component {
  handle() {
    console.log(this);           //undefined
  }
  render() {
    return <button onClick={this.handle}>提交</button>;
  }
}
export default Btn;