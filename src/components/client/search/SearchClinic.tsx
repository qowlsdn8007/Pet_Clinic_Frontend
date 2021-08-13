import React, { useState } from "react";
import { Input } from "antd";
import axios from "axios";
import SearchList from "./SearchList";
import SerachMap from "./SearchMap";

const { Search } = Input;

const data = [
    {
        avatar: "http://mnews.imaeil.com/inc/photos/2020/12/28/2020122813405515268_l.jpg",
        title: "참 좋은 동물병원"
    },
    {
        avatar: "https://img6.yna.co.kr/etc/inner/KR/2021/03/12/AKR20210312116400009_02_i_P2.jpg",
        title: "더 좋은 동물병원"
    }
]


const SearchClinic: React.FC = () => {
    const [hasData, setHasData] = useState<boolean>(false);
    const onSearch = (value: string) => {
        (data.length > 0) && setHasData(true);
        console.log(hasData);
    };

    return <>
        <div>
            <Search placeholder="검색어 입력" allowClear onSearch={onSearch} style={{ width: "40%" }} />
        </div>
        {hasData && <SearchList data={data} />}

        <SerachMap />
    </>
}

export default SearchClinic;