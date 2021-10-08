import React from 'react';
class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }
  componentWillMount() {
    this.setState({age: 28});
  }
  render() {
    return <button>{this.state.name}</button>;
  }
  componentDidMount() {
    // $.post("server.php", {id:1}, json => {
    //   this.setState({age: json.data.age});
    // }, "json");
  }
}
export default Btn;