import React from 'react';
import ReactDOM from 'react-dom';
class Btn extends React.Component {
  render() {
    ReactDOM.findDOMNode(this);        //抛出错误  
    return <button>提交</button>;
  }
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this));        //<button>提交</button>
  }
}
export default Btn;