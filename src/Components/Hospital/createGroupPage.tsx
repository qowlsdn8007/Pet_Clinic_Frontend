import { Form, Input, Button } from 'antd';
import * as React from 'react';

const CreateGroupPage: React.FC = () => {
    return <>
        <div style={{ paddingTop: 200 }}></div>
        <Form style={{ marginLeft: 600, marginRight: 600 }}>
            <Form.Item label="Field A">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item style={{ float: "right" }} >
                <Button type="primary">Submit</Button>
                <Button type="ghost" style={{ marginLeft: 10 }}>cancel</Button>
            </Form.Item>
        </Form>
    </>
};

export default CreateGroupPage;