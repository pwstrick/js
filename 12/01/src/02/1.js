import React from 'react';
class Btn extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "提交"
    };
  }
  render() {
    return <button>{this.state.text}</button>;
  }
}
export default Btn;