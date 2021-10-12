import React from 'react';
class Btn extends React.Component {
  render() {
    return <button>提交</button>;
  }
}
class Container extends React.Component {
  render() {
    return <Btn ref={btn => { this.myBtn = btn }}>提交</Btn>;
  }
  componentDidMount() {
    let btn = this.myBtn;
    console.log(btn);           //Btn组件的实例
  }
}
export default Container;