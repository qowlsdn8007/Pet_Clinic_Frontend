import React from 'react';
import MyPetList from './MyPetList';
import { ClientPath } from '../../../../components/component/Path';
import styles from './my-pet.module.css';

const MyPet = () => {
    const data = [
        {
            name: "반려동물1",
            avatar: "https://img.insight.co.kr/static/2017/04/26/700/86LCHY1SK16P4A11MIF5.jpg",
            link: ClientPath + `/mypage/mypet/0`,
            detail: {
                birth: "2002.11.12",
                speices: "웰시",
                sex: "암컷",
                weight: "8.05kg",
                master: "이시금",
                phoneNum: "010-0000-0000"
            }

        },
        {
            name: "반려동물2",
            avatar: "http://t1.daumcdn.net/liveboard/petnu/9f4cdd687fa647079502d781538c9987.JPG",
            link: ClientPath + `/mypage/mypet/1`,
            detail: {
                birth: "2004.10.13",
                speices: "코기",
                sex: "수컷",
                weight: "8.07kg",
                master: "이시은",
                phoneNum: "010-1111-1111"
            }
        }
    ]

    return <>
        <div className={styles.mypet}>
            <MyPetList data={data} />
        </div>
    </>
}

export default MyPet;