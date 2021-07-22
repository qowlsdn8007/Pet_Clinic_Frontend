import React from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';
import SignUp from './components/login/sign-up/SignUp';

import 'antd/dist/antd.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/sign-up">
            <SignUp></SignUp>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
