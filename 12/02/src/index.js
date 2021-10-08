import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App011 from './01/1';
import App021 from './02/1';
import App031 from './03/1';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/01/1">
        <App011 name="提交"/>
      </Route>
      <Route exact path="/02/1">
        <App021/>
      </Route>
      <Route exact path="/03/1">
        <App031/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);