import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Radio } from 'antd';

import styles from './login.module.css';

type LoginFormProps = {
  id: string;
  pw: string;
};

function LoginForm() {
  const history = useHistory();

  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  function goToMain(values: LoginFormProps): void {
    // history.push("/") //go To Main Page
  }

  function goToSignUp(): void {
    history.push('/sign-up'); //go To Main Page
  }

  const onFinish = (values: LoginFormProps) => {
    console.log('Success:', values);
    goToMain(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.card}>
      <div className={styles.login_form}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 0 }}
          // initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="id" rules={[{ required: true, message: 'id를 입력해주세요!' }]}>
            <Input placeholder="아이디" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'password를 입력해주세요!' }]}>
            <Input.Password placeholder="비밀번호" />
          </Form.Item>{' '}
          <Form.Item>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>수의사</Radio>
              <Radio value={2}>동물 병원 직원</Radio>
              <Radio value={3}>반려동물 보호자</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              로그인
            </Button>
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Button type="link" onClick={goToSignUp}>
              회원가입
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginForm;
