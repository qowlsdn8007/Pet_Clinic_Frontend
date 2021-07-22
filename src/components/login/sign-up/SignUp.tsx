import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, RadioChangeEvent, Form } from 'antd';

import SignUpUserType from './SignUpUserType';
import SignUpForm from './SignUpForm';

function SignUp() {
  const history = useHistory();

  const [step, setStep] = useState<number>(1);
  const [type, setType] = useState<string>('Vet'); /* Client, Vet, Staff */

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

  function onSignUp(): void {
    console.log(`Sign Up`);
    // history.push("/") //go To Main Page
  }

  function nextStep(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    step + 1 > 2 ? setStep(step) : setStep(step + 1);
  }
  function prevStep(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    step - 1 < 0 ? setStep(step) : setStep(step - 1);
    setType('Vet');
  }

  function updateType(e: RadioChangeEvent): number {
    setType(e.target.value);
    return e.target.value;
  }

  return (
    <div>
      {step == 1 && <SignUpUserType setType={updateType} layout={layout} />}
      {step == 2 && <SignUpForm type={type} layout={layout} validateMessages={validateMessages} />}
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        {step >= 2 && <Button onClick={prevStep}> 👈 이전 </Button>}
        {step <= 1 && <Button onClick={nextStep}> 다음 👉 </Button>}
        {step >= 2 && (
          <Button onClick={onSignUp} htmlType="submit">
            회원 가입 🙌
          </Button>
        )}
      </Form.Item>
    </div>
  );
}

export default SignUp;
