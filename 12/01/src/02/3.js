import React from 'react';
class Btn extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "提交"
    };
  }
  change() {
    this.setState({text: "点击"});
    console.log(this.state.text);
  }
  render() {
    return <button onClick={this.change.bind(this)}>{this.state.text}</button>;
  }
}
export default Btn;