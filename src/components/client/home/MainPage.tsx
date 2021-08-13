import * as React from 'react';
import Menu from '../../component/Menu';
import { useHistory } from 'react-router-dom';
import { ClientPath } from '../../component/Path';

export const MainPage: React.FC = () => {
    const history = useHistory();
    const menu: string[] = ["홈", "마이페이지", "병원 검색", "예약 조회", "고객 센터"];
    const link: string[] = [ClientPath, ClientPath + "/mypage", ClientPath + "/search", ClientPath + "/reservation", ClientPath + "/customer-center"];

    return <>
        <div>
            <Menu menu={menu} link={link} />
        </div>
        <div >
            <p onClick={() => history.push(ClientPath)}>PET CLINIC</p>
            <p>소제목</p> {/*이부분 children  */}
        </div>
    </>
};

export default MainPage;