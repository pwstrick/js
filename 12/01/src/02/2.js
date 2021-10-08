import React from 'react';
class Btn extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "提交"
    };
  }
  change() {
    this.setState((state, props) => {
      return { text: state.text === "点击" ? "提交" : "点击" };
    });
  }
  render() {
    return <button onClick={this.change.bind(this)}>{this.state.text}</button>;
  }
}
export default Btn;