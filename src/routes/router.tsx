import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShowClientPage from '../Components/Hospital/showClientPage';
import { MainPage } from '../Components/Hospital/mainPage';
import CreateGroupPage from '../Components/Hospital/createGroupPage';
import GroupDetailPage from '../Components/Hospital/groupDetailPage';
import Home from '../Components/SignIn&Up/home/Home';
import Login from '../Components/SignIn&Up/login/Login';
import SignUp from '../Components/SignIn&Up/sign-up/SignUp';

const Router: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/"><Home /></Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up">
                <SignUp></SignUp>
            </Route>
        </Switch>
        {/*
        <Route path="/ShowClient" exact component={ShowClientPage} />
        <Route path="/CreateGroup" exact component={CreateGroupPage} />
        <Route path="/GroupDetail" exact component={GroupDetailPage} />
        */}
    </BrowserRouter>
)

export default Router;