import React from 'react';
class Text extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }
  handle() {
    this.input.value = this.input.value.toUpperCase();
  }
  render() {
    return <input onBlur={this.handle} type="text" ref={ input => {this.input = input}}/>;
  }
}
export default Text;