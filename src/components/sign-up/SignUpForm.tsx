import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Form, Input, Button, Upload, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import styles from './sign-up.module.css';

import SignUpSearchModal from './SignUpSearchModal';
import SignUpCreateHospitalModal from './SignUpCreateHospitalModal';

type signUpProps = {
  type: string;
  layout: { labelCol: Object; wrapperCol: Object };
  validateMessages: Object;
};

function SignUpForm({ type, layout, validateMessages }: signUpProps) {
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        {(type == 'Vet' || type == 'Staff') && (
          <div>
            <Form.Item name="hospital" rules={[{ required: true }]}>
              <Input placeholder="병원명" />
              <div className={styles.buttons}>
                <SignUpSearchModal />
                {type == 'Vet' && <SignUpCreateHospitalModal />}
              </div>
            </Form.Item>
            {type == 'Vet' && (
              <Form.Item name="license" rules={[{ required: true }]}>
                <Space direction="vertical" style={{ width: '100%' }} size="large">
                  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture" maxCount={1}>
                    <Button icon={<UploadOutlined />}>라이선스 등록</Button>
                  </Upload>
                </Space>
              </Form.Item>
            )}
          </div>
        )}
        <Form.Item name="id" rules={[{ required: true }]}>
          <Input placeholder="아이디" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password placeholder="비밀번호" />
        </Form.Item>

        <Form.Item name="name" rules={[{ required: true }]}>
          <Input placeholder="이름" />
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
          <Input placeholder="전화번호" />
        </Form.Item>
        <Form.Item name="email" rules={[{ type: 'email' }]}>
          <Input placeholder="이메일" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUpForm;
