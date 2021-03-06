import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Onboarding from './components/onboarding/Onboarding';
import Registerform from './components/registerform/Registerform';
import Loginform from './components/loginform/Loginform';
import Main from './components/main/Main';
import Modalpass from './components/modal-pass/Modalpass';
import BadgeReg from './components/badges/BadgeReg';
import './App.sass';
import './App.css';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
      <Landing /> 
      </Route>
      <Route exact path="/onboarding">
      <Onboarding />
      </Route>
      <Route exact path="/register">
      <Registerform />
      </Route>
      <Route exact path="/loginform">
      <Loginform />
      </Route>
      <Route exact path="/main">
      <Main />
      </Route>
      <Route exact path="/Modalpass">
      <Modalpass />
      </Route>
      <Route exact path="/badgereg">
      <BadgeReg />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
