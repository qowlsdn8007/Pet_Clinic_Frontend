import React from 'react';
import { Route } from 'react-router-dom';
import Login from 'src/components/sign-in-up/login/Login';
import SignUp from 'src/components/sign-in-up/sign-up/SignUp';
const ClinicSubRouter: React.FC = () => {
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

export default ClinicSubRouter;
