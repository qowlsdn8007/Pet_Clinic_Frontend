import { useState, Props } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Radio, RadioChangeEvent } from 'antd';

type setProps = {
  setType: (e: RadioChangeEvent) => number;
  layout: { labelCol: Object; wrapperCol: Object };
};

function SignUpUserType({ setType, layout }: setProps) {
  const history = useHistory();
  const [value, setValue] = useState<string>('Vet');

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    setType(e);
  };

  return (
    <div>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
        <Radio.Group onChange={onChange} defaultValue="1" value={value}>
          <Radio value={'Vet'}>수의사</Radio>
          <Radio value={'Staff'}>동물 병원 직원</Radio>
          <Radio value={'Client'}>반려동물 보호자</Radio>
        </Radio.Group>
      </Form.Item>
    </div>
  );
}

export default SignUpUserType;
