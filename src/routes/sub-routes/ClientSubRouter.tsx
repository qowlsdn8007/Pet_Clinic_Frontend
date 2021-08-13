import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../../components/client/home/MainPage';
import { ClientPath } from '../../components/component/Path';
import MyPage from '../../components/client/my-page/MyPage'
import MyInfo from '../../components/client/my-page/my-info/MyInfo';
import MyPet from '../../components/client/my-page/my-pet/MyPet';
import MyPetDetail from '../../components/client/my-page/my-pet/my-pet-detail/MyPetDetail';
import MyFavorite from '../../components/client/my-page/my-favorite/MyFavorite';
import SearchClinic from '../../components/client/search/SearchClinic';
import Reservation from '../../components/client/reservation/Reservation';
import CustomerCenter from '../../components/client/customer-center/CustomerCenter';


const ClientSubRouter: React.FC = () => {
    return <>
        <Route path={ClientPath}> <MainPage /></Route>
        <Route exact path={ClientPath + `/mypage`}> <MyPage /> </Route>
        <Route exact path={ClientPath + `/mypage/myinfo`}> <MyInfo /></Route>
        <Route exact path={ClientPath + `/mypage/mypet`}> <MyPet /> </Route>
        <Route exact path={ClientPath + `/mypage/mypet/:id`}> <MyPetDetail /> </Route>
        <Route exact path={ClientPath + `/mypage/myfavorite`}> <MyFavorite /> </Route>
        <Route exact path={ClientPath + `/search`}> <SearchClinic /> </Route>
        <Route exact path={ClientPath + '/reservation'}> <Reservation /> </Route>
        <Route exact path={ClientPath + '/customer-center'}> <CustomerCenter /> </Route>
    </>

}
export default ClientSubRouter;