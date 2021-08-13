import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';

interface Props {
    menu: string[];
    link: string[];
}

const Menu: React.FC<Props> = ({ menu, link }: Props) => {
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
                bodyStyle={{ backgroundColor: '#F5F2EB' }}
                headerStyle={{ backgroundColor: '#F5F2EB' }}
                width="20%"
                placement="left"
                title={<img width={50} height={50} src="../../assets/images/개.png" />}
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                {menu.map((m) => (
                    <p key={menu.indexOf(m)} onClick={() => { history.push(link[menu.indexOf(m)]); setVisible(false) }}>{m}</p>
                ))}
            </Drawer>
        </>
    );
};

export default Menu;
