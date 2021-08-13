import React from 'react';
import MyInfoForm from './MyInfoForm';
import styles from './my-info.module.css';

const MyInfo: React.FC = () => {
    return <div className={styles.myinfo}>
        <div className={styles.box}>
            <MyInfoForm />
        </div>
    </div>
}

export default MyInfo;