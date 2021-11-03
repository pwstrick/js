import React from 'react';
class Parent extends React.Component {
  render() {
    return <Child name="strick">子组件</Child>;
  }
}
class Child extends React.Component {
  render() {
    return <input name={this.props.name} type="text" />;
  }
}
export default Parent;