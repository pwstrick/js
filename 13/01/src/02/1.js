import React from 'react';
class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.myBtn = React.createRef();
  }
  render() {
    return <button ref={this.myBtn}>提交</button>;
  }
  componentDidMount() {
    let btn = this.myBtn.current;
    console.log(btn);         //<button>提交</button>
  }
}
export default Btn;