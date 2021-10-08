import React from 'react';
class Btns extends React.Component {
  render() {
    const list = this.props.names.map(value => <button>{value}</button>);
    return <div>{list}</div>;
  }
}
export default Btns;