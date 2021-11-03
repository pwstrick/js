import React from 'react';
class Parent extends React.Component {
  callback(value) {
    console.log(value);        //输出从子组件传递过来的值
  }
  render() {
    return <Child callback={this.callback} />;
  }
}
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  handle(e) {
    this.props.callback(e.target.value);        //调用父组件的回调函数
    this.setState({ name: e.target.value });    //更新文本框中的值
  }
  render() {
    return <input value={this.state.name} type="text" onChange={this.handle.bind(this)} />;
  }
}
export default Parent;