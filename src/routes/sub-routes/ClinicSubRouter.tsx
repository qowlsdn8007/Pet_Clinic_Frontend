import React from 'react';
import { Route } from 'react-router-dom';

import { MainPage } from '../../components/clinic/home/MainPage';
import ShowClientPage from '../../components/clinic/pet/ShowClientPage';
import CreateGroupPage from '../../components/clinic/pet/CreateGroupPage';
import GroupDetailPage from '../../components/clinic/pet/GroupDetailPage';
import { ClinicPath } from '../../components/component/Path';

const ClinicSubRouter: React.FC = () => {
  return (
    <>
      <Route exact path={ClinicPath}>
        {' '}
        <MainPage />
      </Route>
      <Route exact path={ClinicPath + '/show-client'}>
        {' '}
        <ShowClientPage />{' '}
      </Route>
      <Route exact path={ClinicPath + '/create-group'}>
        {' '}
        <CreateGroupPage />{' '}
      </Route>
      <Route exact path={ClinicPath + '/group-detail'}>
        {' '}
        <GroupDetailPage />{' '}
      </Route>
    </>
  );
};

export default ClinicSubRouter;
