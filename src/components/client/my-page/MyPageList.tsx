import { Avatar, List } from 'antd';
import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { ClientPath } from '../../../components/component/Path';
import MyInfo from './my-info/MyInfo';

interface Props {
    data: { title: string, link: string }[];
}

const MyPageList: React.FC<Props> = ({ data }: Props) => {
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

export default MyPageList;