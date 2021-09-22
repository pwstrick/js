import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App021 from './02/1';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/02/1">
        <App021 />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);