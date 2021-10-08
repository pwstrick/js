import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App011 from './01/1';
import App012 from './01/2';
import App021 from './02/1';
import App022 from './02/2';
import App023 from './02/3';
import App031 from './03/1';
import App032 from './03/2';
import Btns1 from './04/1';
import Btns2 from './04/2';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/01/1">
        <App011 />
      </Route>
      <Route exact path="/01/2">
        <App012 text="函数组件"/>
      </Route>
      <Route exact path="/02/1">
        <App021 />
      </Route>
      <Route exact path="/02/2">
        <App022 />
      </Route>
      <Route exact path="/02/3">
        <App023 />
      </Route>
      <Route exact path="/03/1">
        <App031 name="strick"/>
      </Route>
      <Route exact path="/03/2">
        <App032/>
      </Route>
      <Route exact path="/04/1">
        <Btns1 names={[1,2,3]}>按钮列表</Btns1>
      </Route>
      <Route exact path="/04/2">
        <Btns2 names={[1,2,3]}>按钮列表</Btns2>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);