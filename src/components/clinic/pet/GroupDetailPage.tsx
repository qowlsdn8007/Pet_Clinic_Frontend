import { Button, Table, Modal } from 'antd';
import React, { useState } from 'react';

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


/////////////////// 더미
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
////////////////////////

const GroupDetailPage: React.FC = () => {
    const [DetailModal, setDetailModal] = useState(false);


    return <>
        <div style={{ paddingTop: 200 }}></div>
        <div style={{ display: "inline-flex", width: "100%" }}>
            <div style={{ borderRadius: 30, backgroundColor: "#FDF4DE", width: "45%", height: 500, marginLeft: 60, marginRight: 10, float: "left" }} >
                <Button onClick={() => setDetailModal(true)} shape="round" style={{ fontWeight: "bold", marginTop: 450, marginLeft: 900 }}>+</Button>
            </div>
            <div style={{ borderRadius: 30, backgroundColor: "#FDF4DE", width: "45%", height: 500, marginRight: 10, float: "right" }} >
                <Button onClick={() => setDetailModal(true)} shape="round" style={{ fontWeight: "bold", marginTop: 450, marginLeft: 900 }}>+</Button>
            </div>
        </div>
        <Table
            style={{ paddingLeft: 100, marginRight: 200 }}
            columns={columns}
            dataSource={data}
        />
        <Modal
            title="상세 정보"
            visible={DetailModal}
            onOk={() => setDetailModal(false)}
            onCancel={() => setDetailModal(false)}
            okText="확인"
            cancelText="취소"
        >
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
        </Modal>
    </>
};

export default GroupDetailPage;