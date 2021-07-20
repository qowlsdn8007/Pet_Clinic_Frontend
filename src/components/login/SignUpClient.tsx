import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, InputNumber, Button } from 'antd';

function SignUp() {
  const history = useHistory();

  function onSignUp(form: { id: string; pw: string }): void {
    console.log(form);
    // history.push("/") //go To Main Page
  }
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
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
  return <div>Sign Up Client </div>;
}

export default SignUp;
