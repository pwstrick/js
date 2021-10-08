import React from 'react';
class Btns extends React.Component {
  render() {
    const list1 = this.props.names.map(value => <button key={value}>{value}</button>);
    const list2 = this.props.names.map(value => <button key={value}>{value}</button>);
    return (
      <div>
        <section>{list1}</section>
        <section>{list2}</section>
      </div>
    );
  }
}
export default Btns;