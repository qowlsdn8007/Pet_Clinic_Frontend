import React from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';
import SignUp from './components/sign-up/SignUp';

import 'antd/dist/antd.css';
import styles from './app.module.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MedicalHistory from './components/medical-history/MedicalHistory';

function App() {
  return (
    <div className={styles.app}>
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
          <Route exact path="/medical-history">
            <MedicalHistory />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
