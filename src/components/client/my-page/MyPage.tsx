import React from 'react';
import MyPageList from './MyPageList';
import { ClientPath } from '../../../components/component/Path';

const MyPage: React.FC = () => {
    const data = [
        {
            title: '내 정보',
            link: ClientPath + "/mypage/myinfo"
        },
        {
            title: '내 반려동물',
            link: ClientPath + "/mypage/mypet"
        },
        {
            title: '즐겨찾는 병원',
            link: ClientPath + "/mypage/myfavorite"
        },
    ];

    return <>
        <MyPageList data={data} />
    </>
}
export default MyPage;