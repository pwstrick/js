import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App021 from './02/1';
import App031 from './03/1';
import App041 from './04/1';
import App042 from './04/2';
import App043 from './04/3';
import App051 from './05/1';
import App052 from './05/2';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/02/1">
        <App021 />
      </Route>
      <Route exact path="/03/1">
        <App031 />
      </Route>
      <Route exact path="/04/1">
        <App041 />
      </Route>
      <Route exact path="/04/2">
        <App042 />
      </Route>
      <Route exact path="/04/3">
        <App043 />
      </Route>
      <Route exact path="/05/1">
        <App051 />
      </Route>
      <Route exact path="/05/2">
        <App052 />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);