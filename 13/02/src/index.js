/*
 * @Author: strick
 * @LastEditors: strick
 * @Date: 2021-10-12 13:33:14
 * @LastEditTime: 2021-10-12 13:33:34
 * @Description: 
 * @FilePath: /strick/js/13/02/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App011 from './01/1';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/01/1">
        <App011 />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);