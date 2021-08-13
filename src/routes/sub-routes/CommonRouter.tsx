import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../../components/sign-in-up/login/Login';
import SignUp from '../../components/sign-in-up/sign-up/SignUp';
const CommonRouter: React.FC = () => {
  return (
    <>
      <Route exact path={'/login'}>
        <Login />
      </Route>
      <Route exact path={'/sign-up'}>
        <SignUp />
      </Route>
    </>
  );
};

export default CommonRouter;
