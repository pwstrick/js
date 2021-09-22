import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App1 from './1';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/1">
        <App1 />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);