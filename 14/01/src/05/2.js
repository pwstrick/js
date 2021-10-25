import React from 'react';
class Btn extends React.Component {
  handle(name, e) {
    console.log(name, e);
  }
  render() {
    return <button onClick={this.handle.bind(this, "strick")}>bind</button>;
  }
}
export default Btn;