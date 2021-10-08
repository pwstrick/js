import React from 'react';
class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  render() {
    return <div>{this.props.name}</div>;
  }
}
export default Btn;