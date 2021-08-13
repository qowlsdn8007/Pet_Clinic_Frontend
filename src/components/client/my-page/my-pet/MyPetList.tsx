import { Avatar, List } from 'antd';
import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { ClientPath } from '../../../../components/component/Path';

interface Props {
    data: {
        name: string, avatar: string, link: string, detail: {
            birth: string,
            speices: string,
            sex: string,
            weight: string,
            master: string,
            phoneNum: string
        },
    }[];
}

const MyPetList: React.FC<Props> = ({ data }: Props) => {
    const history = useHistory();
    return <>
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<p onClick={() => history.push(item.link, data[data.indexOf(item)])}>{item.name}</p>}
                    />
                </List.Item>
            )}
        />
    </>
}

export default MyPetList;