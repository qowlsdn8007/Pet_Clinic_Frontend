import React from "react";
import { List } from "antd";
import Avatar from "antd/lib/avatar/avatar";

interface Props {
    data:
    {
        avatar: string,
        title: string
    }[]
}

const SearchList: React.FC<Props> = ({ data }: Props) => {
    return <>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar shape={"square"} size="large" src={item.avatar} />}
                        title={<p>{item.title}</p>}
                    />
                </List.Item>
            )}
        />
    </>

}
export default SearchList;