import React from 'react';
class Btn extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}
class Container extends React.Component {
  render() {
    return <Btn text={this.props.text} />;
  }
}
export default Container;