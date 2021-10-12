import React from 'react';
class Btn extends React.Component {
  render() {
    return (
      <button ref={btn => { this.myBtn = btn }}>提交</button>
    );
  }
  componentDidMount() {
    let btn = this.myBtn;
    console.log(btn);           //<button>提交</button>
  }
}
export default Btn;