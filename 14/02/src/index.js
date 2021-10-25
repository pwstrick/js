import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App011 from './01/1';
import App012 from './01/2';
import App013 from './01/3';
import App014 from './01/4';
import App021 from './02/1';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/01/1">
        <App011 />
      </Route>
      <Route exact path="/01/2">
        <App012 />
      </Route>
      <Route exact path="/01/3">
        <App013 />
      </Route>
      <Route exact path="/01/4">
        <App014 />
      </Route>
      <Route exact path="/02/1">
        <App021 />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);