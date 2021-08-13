import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label}을(를) 입력해주세요',
    types: {
        email: '${label} 형식이 올바르지 않습니다',
        number: '${label} 형식이 올바르지 않습니다',
    },
    number: {
        range: '${label} 숫자는 ${min} 에서 ${max} 사이여야 합니다',
    },
};
/* eslint-enable no-template-curly-in-string */

const MyInfoForm = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'email']} label="이메일" rules={[{ type: 'email', required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'password']} label="비밀번호" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'name']} label="이름" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'address']} label="주소">
                <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'phoneNum']} label="휴대전화">
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    수정
                </Button>
            </Form.Item>
        </Form>
    );
};

export default MyInfoForm;