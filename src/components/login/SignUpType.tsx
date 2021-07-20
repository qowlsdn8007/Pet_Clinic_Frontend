import { useState, Props } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Radio, RadioChangeEvent } from 'antd';

type setProps = {
  setType: (e: RadioChangeEvent) => number;
};

function SignUp(props: setProps) {
  const history = useHistory();
  const [value, setValue] = useState<number>(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
    props.setType(e);
  };

  return (
    <div>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>수의사</Radio>
        <Radio value={2}>동물 병원 직원</Radio>
        <Radio value={3}>반려동물 보호자</Radio>
      </Radio.Group>
    </div>
  );
}

export default SignUp;
