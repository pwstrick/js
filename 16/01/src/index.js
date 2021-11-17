import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App011 from './01/1';
import App012 from './01/2';

function Main() {
  return <div>main</div>;
}
function List() {
  return <div>list</div>;
}
function Name(props) {
  return props.age;
}
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/01/1">
        <App011 />
      </Route>
      <Route path="/01/2">
        <App012 />
      </Route>
      <Route path="/main" component={Main} />
      <Route path="/list/:page+" component={List} />
      <Route path="/name" render={(props) => { return <Name {...props} age="30" /> }}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);