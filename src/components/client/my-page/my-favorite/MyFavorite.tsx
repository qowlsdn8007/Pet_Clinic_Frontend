import React from 'react';
import MyFavoriteList from './MyFavoriteList';

const data = [
    {
        title: "참좋은 병원",
        link: ""
    },
    {
        title: "더 좋은 병원",
        link: ""
    }
]

const MyFavorite: React.FC = () => {

    return <>
        <MyFavoriteList data={data} />
    </>
}

export default MyFavorite;