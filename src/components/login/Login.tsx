import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";

type LoginFormProps = {
  id: string;
  pw: string;
};

function Login() {
  const history = useHistory();

  function goToMain(values: LoginFormProps): void {
    // history.push("/") //go To Main Page
  }

  function goToSignUp(): void {
    history.push("/sign-up"); //go To Main Page
  }

  const onFinish = (values: LoginFormProps) => {
    console.log("Success:", values);
    goToMain(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      {" "}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="id"
          name="id"
          rules={[{ required: true, message: "id를 입력해주세요!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: "password를 입력해주세요!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          {/* <Checkbox>Remember me</Checkbox> */}
          <Button type="link">회원가입</Button>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
