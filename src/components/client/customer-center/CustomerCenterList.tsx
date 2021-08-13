import React from "react";
import { List } from "antd";


interface Props {
    menu: string[],
}

const CustomerCenterList: React.FC<Props> = ({ menu }: Props) => {
    return <>
        <List
            itemLayout="horizontal"
            dataSource={menu}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<p>{item}</p>}
                    />
                </List.Item>
            )}
        />
    </>
}

export default CustomerCenterList;