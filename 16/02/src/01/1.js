import React from 'react';
class Btn extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.dot = this.dot.bind(this);
  }
  dot() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return <button onClick={this.dot}>{this.state.count}</button>;
  }
}
export default Btn;