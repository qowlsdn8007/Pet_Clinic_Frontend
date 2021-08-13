import React from "react";
import { List } from "antd";
import { useHistory } from "react-router-dom";

interface Props {
    data: { title: string, link: string }[]
}

const MyFavoriteList: React.FC<Props> = ({ data }: Props) => {
    const history = useHistory();

    return <>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<p onClick={() => history.push(item.link)}>{item.title}</p>}
                    />
                </List.Item>
            )}
        />
    </>
}

export default MyFavoriteList;