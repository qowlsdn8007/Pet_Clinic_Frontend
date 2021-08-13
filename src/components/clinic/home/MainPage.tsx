import * as React from 'react';
import Menu from '../../component/Menu';
import { useHistory } from 'react-router-dom';
import { ClinicPath } from '../../component/Path';

export const MainPage: React.FC = () => {
    const history = useHistory();
    const menu: string[] = ["홈", "고객과 반려동물", "의료 기록", "일정 관리", "시설 관리", "결제 관리", "메타사전"];
    const link: string[] = [ClinicPath, ClinicPath + "/show-client"];

    return <>
        <div>
            <Menu menu={menu} link={link} />
        </div>
        <div >
            <p onClick={() => history.push(ClinicPath)}>PET CLINIC</p>
            <p>소제목</p> {/*이부분 children  */}
        </div>
    </>
};