import { Form, Input, InputNumber, Button, DatePicker } from 'antd';
import moment from 'moment';

function MedicalHistorySearch() {
  const { RangePicker } = DatePicker;
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

  const dateFormat = 'YYYY-MM-DD';

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name="label">의료 기록 검색</Form.Item>
      <Form.Item name="client">
        <Input placeholder="보호자 이름 검색" />
      </Form.Item>
      <Form.Item name="pet">
        <Input placeholder="반려동물 이름 검색" />
      </Form.Item>
      <Form.Item name="vet">
        <Input placeholder="수의사 이름 검색" />
      </Form.Item>
      <Form.Item name="phone">
        <Input placeholder="전화번호 검색" />
      </Form.Item>
      <Form.Item name="range-picker">
        <RangePicker placeholder={['시작 날짜', '종료 날짜']} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default MedicalHistorySearch;
