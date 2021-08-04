import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from '../../components/clinic/home/MainPage';
import ShowClientPage from '../../components/clinic/client&pet/ShowClientPage';
import CreateGroupPage from '../../components/clinic/client&pet/CreateGroupPage';
import GroupDetailPage from '../../components/clinic/client&pet/GroupDetailPage';
import { ClinicPath } from '../../components/component/Path';

const ClinicSubRouter: React.FC = () => {
    return <>
        <Route exact path={ClinicPath}> <MainPage /></Route>
        <Route exact path={ClinicPath + "/ShowClient"}> <ShowClientPage /> </Route>
        <Route exact path={ClinicPath + "/CreateGroup"}> <CreateGroupPage /> </Route>
        <Route exact path={ClinicPath + "/groupDetail"}> <GroupDetailPage /> </Route>
    </>
}

export default ClinicSubRouter;