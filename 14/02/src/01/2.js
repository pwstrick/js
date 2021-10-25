import React from 'react';
class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gender: "" };
    this.handle = this.handle.bind(this);
  }
  handle(e) {
    this.setState({
      gender: e.target.value
    });
  }
  render() {
    return (
      <>
        <input name="gender" value="1" onChange={this.handle} type="radio" 
          checked={this.state.gender === "1"}
        />男
        <input name="gender" value="2" onChange={this.handle} type="radio"
          checked={this.state.gender === "2"}
        />女
      </>
    );
  }
}
export default Radio;