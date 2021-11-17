import React from 'react';
import {
  BrowserRouter,
  Link,
  Prompt
} from "react-router-dom";
const action = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}
class Demo extends React.Component {
  render() {
    return <BrowserRouter getUserConfirmation={action}>
    <div>
      <Prompt message="确认要离开吗？" />
      <Link to="page.html">首页</Link>
    </div>
  </BrowserRouter>;
  }
}
export default Demo;