import React, { useEffect, useRef, useState } from 'react';

const KakaoMap = (props) => {
  const { markerPositions, size } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [, setMarkers] = useState([]);
  const container = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=397a78c848aa6c6c095e4615ce749458&autoload=false';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 3,
        };
        const map = new kakao.maps.Map(container.current, options);
        setKakaoMap(map);
      });
    };
  }, [container]);

  useEffect(() => {
    if (kakaoMap === null) return;

    const center = kakaoMap.getCenter();

    const [width, height] = size;
    container.current.style.width = `${width}px`;
    container.current.style.height = `${height}px`;

    kakaoMap.relayout();
    kakaoMap.setCenter(center);
  }, [kakaoMap, size]);

  useEffect(() => {
    if (kakaoMap === null) return;

    const positions = markerPositions.map((pos) => new kakao.maps.LatLng(...pos));

    setMarkers((markers) => {
      markers.forEach((marker) => marker.setMap(null));
      return positions.map((position) => new kakao.maps.Marker({ map: kakaoMap, position }));
    });

    if (positions.length > 0) {
      const bounds = positions.reduce((bounds, latlng) => bounds.extend(latlng), new kakao.maps.LatLngBounds());

      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, markerPositions]);
  return <div id="container" ref={container} />;
};

export default KakaoMap;
