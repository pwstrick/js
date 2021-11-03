import React from 'react';
const NameContext = React.createContext({name: "strick"});
class Grandpa extends React.Component {
  render() {
    return (
        <NameContext.Provider value={{name: "freedom"}}>
          <Son />
        </NameContext.Provider>
    );
  }
}
class Son extends React.Component {
  render() {
    return <Grandson />;
  }
}
class Grandson extends React.Component {
  render() {
    return (
        <NameContext.Consumer>{context => <p>{context.name}</p>}</NameContext.Consumer>
    );
  }
}
export default Grandpa;