import React from 'react';
class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "strick"
    };
  }
  dot() {
    this.setState({name: "freedom"});
    this.forceUpdate();            //强制更新
  }
  
  componentWillReceiveProps(nextProps) { }
  shouldComponentUpdate(nextProps, nextState) { return true; }
  componentWillUpdate(nextProps, nextState) { }
  render() {
    return <button onClick={this.dot.bind(this)}>{this.state.name}</button>;
  }
  componentDidUpdate(prevProps, prevState) { }
}
export default Btn;