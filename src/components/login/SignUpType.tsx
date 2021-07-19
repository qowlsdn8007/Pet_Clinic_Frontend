import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Radio } from "antd";

function SignUp() {
  const history = useHistory();
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      {" "}
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>수의사</Radio>
        <Radio value={2}>동물 병원 직원</Radio>
        <Radio value={3}>반려동물 보호자</Radio>
      </Radio.Group>
    </div>
  );
}

export default SignUp;
