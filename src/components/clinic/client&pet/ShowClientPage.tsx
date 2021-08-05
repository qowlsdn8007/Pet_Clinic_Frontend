import * as React from 'react';
import { Table, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { ClinicPath } from '../../component/Path';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
}

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
];


const ShowClientPage: React.FC = () => {
    const history = useHistory();
    const findUser = ["보호자 이름 검색", "반려동물 이름 검색", "전화번호 검색", "방문 날짜 검색"];

    return <>
        <div style={{ paddingTop: 200 }}>
            <div>
                <Button onClick={() => history.push(ClinicPath + "/CreateGroup")} shape="round" style={{ float: "right", marginBottom: 300 }}>New</Button>
            </div>
            <div>
                <div style={{ display: "inline-grid", marginLeft: 400 }}>
                    {findUser.map(m => <Button shape="round" style={{ marginBottom: 5 }}>{m}</Button>)}
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </div>
    </>
};


export default ShowClientPage;