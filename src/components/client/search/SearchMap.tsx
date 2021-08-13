import { CompassOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import KakaoMap from './KakaoMap';
import axios from 'axios';

const SerachMap: React.FC = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const [markerPositions, setMarkerPositions] = useState<number[]>([]);
    const [mapSize, setMapSize] = useState<number[]>([400, 400]);

    useEffect(() => {
        axios.get("https://openapi.gg.go.kr/Animalhosptl?KEY=992d7f6db2ee473fb6065dbac880684e")
            .then(res => {
                console.log((res.data));
            })
            .catch(err => console.log(err));
    }, [])

    return <>
        <CompassOutlined style={{ fontSize: 40 }} onClick={() => setVisible(!visible)} />
        {visible && <KakaoMap markerPositions={markerPositions} size={mapSize} />}
    </>

}

export default SerachMap;