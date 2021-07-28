import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';


const Menu: React.FC = () => {
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <MenuOutlined style={{ margin: 10, fontSize: 30 }} onClick={showDrawer} />
            <Drawer
                bodyStyle={{ backgroundColor: "#F5F2EB" }}
                headerStyle={{ backgroundColor: "#F5F2EB" }}
                width="20%"
                placement="left"
                title={<img width={50} height={50} src='../../assets/images/개.png' />}
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <p>홈</p>
                <p onClick={() => history.push("/ShowClient")}>고객과 반려동물</p>
                <p>의료 기록</p>
                <p>일정 관리</p>
                <p>시설 관리</p>
                <p>결제 관리</p>
                <p>메타사전</p>
            </Drawer>
        </>
    );
};

export default Menu;