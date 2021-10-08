import React from 'react';
const timeout = setInterval(() => {
  console.log("timeout");
}, 5000);
class Btn extends React.Component {
  componentWillUnmount() {
    clearInterval(timeout);
  }
  render() {
    return <div></div>;
  }
}
export default Btn;