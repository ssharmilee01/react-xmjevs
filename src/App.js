import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/header/header';

import Counter from './Counter';
import SearchCities from './SearchCities';
import './style.css';

export function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <h1>Coding Challenge</h1>
          </Route>
          <Route path="/challenge1">
            <Counter />
          </Route>
          <Route path="/challenge2">
            <SearchCities />
          </Route>
          <Route path="*">
            <Redirect push to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
