import { useState } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, Form, InputNumber, Select } from 'antd';

import styles from './modal.module.css';

const { Option } = Select;

type setProps = {};
function SignUpCreateHospitalModal(props: setProps) {
  const history = useHistory();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name="nane" label="병원명" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="phone" label="병원 전화번호">
        <Input />
      </Form.Item>
      <Form.Item label="주소">
        <Input.Group compact>
          <Form.Item name="address" noStyle rules={[{ required: true, message: 'Province is required' }]}>
            <Select placeholder="Select province">
              <Option value="Zhejiang">Zhejiang</Option>
              <Option value="Jiangsu">Jiangsu</Option>
            </Select>
          </Form.Item>
          <Form.Item name={['address', 'street']} noStyle rules={[{ required: true, message: 'Street is required' }]}>
            <Input style={{ width: '50%' }} placeholder="Input street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item name="fax" label="팩스">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="설명">
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
}

export default SignUpCreateHospitalModal;
