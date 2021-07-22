import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Modal, Form, Input, InputNumber, Button, Select, Upload, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Password from 'antd/lib/input/Password';

import SignUpSearchModal from './SignUpSearchModal';
import SignUpCreateHospitalModal from './SignUpCreateHospitalModal';
const { Option } = Select;

type signUpProps = {
  type: string;
  layout: { labelCol: Object; wrapperCol: Object };
  validateMessages: Object;
};

function SignUpForm({ type, layout, validateMessages }: signUpProps) {
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  // const [modalText, setModalText] = useState('Content of the modal');

  /* eslint-disable no-template-curly-in-string */

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        {(type == 'Vet' || type == 'Staff') && (
          <div>
            <Form.Item name="hospital" label="병원" rules={[{ required: true }]}>
              <Input />
              <SignUpSearchModal visible={visible} setVisible={setVisible} />
              {type == 'Vet' && <SignUpCreateHospitalModal visible={visible} setVisible={setVisible} />}
            </Form.Item>
            {type == 'Vet' && (
              <Form.Item name="license" label="라이선스" rules={[{ required: true }]}>
                <Space direction="vertical" style={{ width: '100%' }} size="large">
                  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture" maxCount={1}>
                    <Button icon={<UploadOutlined />}>파일 업로드</Button>
                  </Upload>
                </Space>
              </Form.Item>
            )}
          </div>
        )}
        <Form.Item name="id" label="아이디" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="비밀번호" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="na" label="이름" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="휴대폰 번호"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="email" label="이메일" rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUpForm;
