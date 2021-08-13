import React from "react";
import { List } from "antd";

interface Props {
    data: {
        title: string,
        date: string,
        time: string,
        doctor: string
    }[]
}

const ReservationList: React.FC<Props> = ({ data }: Props) => {

    return <>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<p>{item.title}</p>}
                        description={<p>{item.date} | {item.time} | {item.doctor} </p>}
                    />
                </List.Item>
            )}
        />
    </>
}

export default ReservationList;