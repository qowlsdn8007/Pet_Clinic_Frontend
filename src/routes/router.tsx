import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ShowClientPage from '../Components/Hospital/showClientPage';
import { MainPage } from '../Components/Hospital/mainPage';
import CreateGroupPage from '../Components/Hospital/createGroupPage';
import GroupDetailPage from '../Components/Hospital/groupDetailPage';

const Router: React.FC = () => (
    <BrowserRouter>
        <Route path="/" component={MainPage} />
        <Route path="/ShowClient" exact component={ShowClientPage} />
        <Route path="/CreateGroup" exact component={CreateGroupPage} />
        <Route path="/GroupDetail" exact component={GroupDetailPage} />
    </BrowserRouter>
)

export default Router;