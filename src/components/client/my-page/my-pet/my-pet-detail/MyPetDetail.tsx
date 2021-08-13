import React from 'react';
import { useLocation, withRouter } from 'react-router';
import MyPetDetailForm from './MyPetDetailForm';
import styles from './my-pet-detail.module.css';

interface Props {
    avatar: string,
    detail: {
        birth: string,
        speices: string,
        sex: string,
        weight: string,
        master: string,
        phoneNum: string
    },
    link: string,
    name: string
}

const MyPetDetail = () => {
    const location = useLocation<Props>();
    const data = location.state;

    return <>
        {console.log(data)}
        <div className={styles.mypet}>
            <div className={styles.box}>
                <MyPetDetailForm data={data} />
            </div>
        </div>
    </>
}

export default withRouter(MyPetDetail);