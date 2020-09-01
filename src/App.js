import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
           <Home/>
          </Route>
          <Route path='/country-detail/:name'>
            <CountryDetail></CountryDetail>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
