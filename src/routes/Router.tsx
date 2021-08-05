import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/sign-in-up/login/Login';
import SignUp from '../components/sign-in-up/sign-up/SignUp';
import styles from './router.module.css';
import HospitalSubRouter from './sub-routes/ClinicSubRouter';
import ClientSubRouter from './sub-routes/ClientSubRouter';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <div className={styles.router}>
        <Route exact path="/">
          <Home />{' '}
        </Route>
        <Route exact path="/login">
          {' '}
          <Login />{' '}
        </Route>
        <Route exact path="/sign-up">
          {' '}
          <SignUp />{' '}
        </Route>
        <HospitalSubRouter />
        <ClientSubRouter />
      </div>
    </Switch>
  </BrowserRouter>
);

export default Router;
