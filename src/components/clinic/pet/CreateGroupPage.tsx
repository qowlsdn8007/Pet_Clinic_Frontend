import { Form, Input, Button } from 'antd';
import * as React from 'react';

const CreateGroupPage: React.FC = () => {
    const label: string[] = ["Field A", "Field B", "Field C", "Field D", "Field E"];
    return <>
        <div style={{ paddingTop: 200 }}></div>
        <Form style={{ marginLeft: 600, marginRight: 600 }}>
            {label.map(m => <Form.Item label={m}>
                <Input placeholder="input placeholder" />
            </Form.Item>)}
            <Form.Item style={{ float: "right" }} >
                <Button type="primary">Submit</Button>
                <Button type="ghost" style={{ marginLeft: 10 }}>cancel</Button>
            </Form.Item>
        </Form>
    </>
};

export default CreateGroupPage;