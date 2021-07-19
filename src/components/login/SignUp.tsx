import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, InputNumber, Button } from "antd";

import SignUpType from "./SignUpType";
import SignUpClient from "./SignUpClient";

function SignUp() {
  const history = useHistory();

  const [step, setStep] = useState<number>(0);
  const [type, setType] = useState<number>(0); /* 0: Client, 1: Vet, 2: Staff */

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
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      {step == 0 && <SignUpType />}
      {step == 1 && type == 0 && <SignUpClient />}
      {step == 1 && type == 1 && <SignUpClient />}
      {step == 1 && type == 2 && <SignUpClient />}
      <Button> 다음 👉 </Button>
    </div>
  );
}

export default SignUp;
