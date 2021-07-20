import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, RadioChangeEvent } from 'antd';

import SignUpType from './SignUpType';
import SignUpClient from './SignUpClient';
import SignUpVet from './SignUpVet';
import SignUpStaff from './SignUpStaff';

function SignUp() {
  const history = useHistory();

  const [step, setStep] = useState<number>(1);
  const [type, setType] = useState<number>(1); /* 0: Client, 1: Vet, 2: Staff */

  function onSignUp(): void {
    console.log(`Sign Up`);
    // history.push("/") //go To Main Page
  }

  function nextStep(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    step + 1 > 2 ? setStep(step) : setStep(step + 1);
  }
  function prevStep(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    step - 1 < 0 ? setStep(step) : setStep(step - 1);
  }

  function updateType(e: RadioChangeEvent): number {
    console.log(`e.target.value: ${e.target.value}`);
    setType(e.target.value);
    return e.target.value;
  }

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      {step == 1 && <SignUpType setType={updateType} />}
      {step == 2 && type == 1 && <SignUpVet />}
      {step == 2 && type == 2 && <SignUpStaff />}
      {step == 2 && type == 3 && <SignUpClient />}
      {step >= 2 && <Button onClick={prevStep}> 👈 이전 </Button>}
      {step <= 1 && <Button onClick={nextStep}> 다음 👉 </Button>}
      {step >= 2 && <Button onClick={onSignUp}> 회원 가입 🙌 </Button>}
    </div>
  );
}

export default SignUp;
