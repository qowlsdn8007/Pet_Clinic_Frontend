import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/sign-in-up/login/Login';
import SignUp from '../components/sign-in-up/sign-up/SignUp';
import styles from './router.module.css';
import { ClientPath } from '../components/component/Path';
import MyInfo from '../components/client/my-page/my-info/MyInfo';

const ClinicSubRouter = React.lazy(() => import('./sub-routes/ClinicSubRouter'));
const ClientSubRouter = React.lazy(() => import('./sub-routes/ClientSubRouter'));




const Router: React.FC = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/"><Home /> </Route>
            <Route exact path="/login"> <Login /> </Route>
            <Route exact path="/sign-up"> <SignUp /> </Route>
            <React.Suspense fallback={<div>로딩 중 ..</div>}>
                <ClinicSubRouter />
                <ClientSubRouter />
            </React.Suspense>
        </Switch >
    </BrowserRouter >
)

export default Router;