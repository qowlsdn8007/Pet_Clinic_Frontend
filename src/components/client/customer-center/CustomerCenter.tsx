import React from "react";
import CustomerCenterList from "./CustomerCenterList";

const CustomerCenter: React.FC = () => {
    const menu = ["공지사항", "이벤트", "1:1 문의", "자주 묻는 질문", "서비스 이용약관"];

    return <>
        <CustomerCenterList menu={menu} />
    </>
}

export default CustomerCenter;