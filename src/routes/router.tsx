import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/SignIn&Up/login/Login';
import SignUp from '../components/SignIn&Up/sign-up/SignUp';
import styles from './router.module.css';
import HospitalSubRouter from './subRoutes/ClinicSubRouter';
import ClientSubRouter from './subRoutes/ClientSubRouter';


const Router: React.FC = () => (
    <BrowserRouter >
        <Switch>
            <div className={styles.router}>
                <Route exact path="/"><Home /> </Route>
                <Route exact path="/login"> <Login /> </Route>
                <Route exact path="/sign-up"> <SignUp /> </Route>
                <HospitalSubRouter />
                <ClientSubRouter />
            </div>
        </Switch >
    </BrowserRouter >
)

export default Router;