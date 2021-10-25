import React from 'react';
class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "init"};
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    this.setState({value: e.target.value.toUpperCase()});
  }
  render() {
    return <input value={this.state.value} onChange={this.handle} type="text" />;
  }
}
export default Text;