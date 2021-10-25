import React from 'react';
class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <select value={this.state.value} onChange={this.handle}>
        <option value="1">strick</option>
        <option value="2">freedom</option>
        <option value="3">jane</option>
      </select>
    );
  }
}
export default Select;