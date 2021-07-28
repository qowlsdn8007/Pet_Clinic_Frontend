import { Header } from 'antd/lib/layout/layout';
import * as React from 'react';
import Menu from '../Component/Menu';
import { useHistory } from 'react-router-dom';
export const MainPage: React.FC<{}> = () => {
    const history = useHistory();
    return <>
        <div style={{ float: "left" }}>
            <Menu />
        </div>
        <div style={{ float: "left", }}>
            <Header onClick={() => history.push("/")}
                style={{ fontSize: 40, fontWeight: "bold", marginLeft: 800, backgroundColor: "white" }}
            >PET CLINIC</Header>
            <Header style={{ fontSize: 20, fontWeight: "bold", backgroundColor: "white", marginLeft: 800, marginTop: 20 }}>소제목</Header> {/*이부분 children  */}
        </div>
    </>
};