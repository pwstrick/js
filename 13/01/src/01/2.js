import React from 'react';
import ReactDOM from 'react-dom';
class Btn extends React.Component {
  render() {
    return ReactDOM.createPortal(this.props.children, document.body);
  }
}
export default Btn;