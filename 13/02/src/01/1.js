import React from 'react';
class Btn extends React.Component {
  render() {
    let btnStyle = {
      height: 40,
      lineHeight: 1.5,
      WebkitBorderRadius: "10%"
    };
    return <button style={btnStyle}>提交</button>;
  }
}
export default Btn;