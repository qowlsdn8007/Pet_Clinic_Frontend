import React from "react";
import ReservationList from "./ReservationList";


const data = [
    {
        title: "참 좋은병원",
        date: "6.28 월",
        time: "오후 2시",
        doctor: "이시금 수의사"
    },
    {
        title: "더 좋은병원",
        date: "6.21 화",
        time: "오후 1시",
        doctor: "이시은 수의사"
    }
]


const Reservation: React.FC = () => {

    return <>
        <ReservationList data={data} />
    </>
}

export default Reservation;