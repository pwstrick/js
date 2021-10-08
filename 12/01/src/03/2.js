import React from 'react';
class Btn extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}
class Container extends React.Component {
  render() {
    return <Btn text="提交" />;
  }
}
export default Container;