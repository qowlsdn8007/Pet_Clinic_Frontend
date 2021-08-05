import { Form, Input, InputNumber, Button, DatePicker, Select } from 'antd';
import moment from 'moment';

type searchProps = {
  onSearch: (value: Object) => void;
  validateMessages: Object;
};
function MedicalHistorySearch({ onSearch, validateMessages }: searchProps) {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log(values);
    onSearch(values);
  };

  return (
    <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name="label">의료 기록 검색</Form.Item>
      <Form.Item name="pet">
        <Input placeholder="반려동물 이름 검색" />
      </Form.Item>
      <Form.Item name="client">
        <Input placeholder="보호자 이름 검색" />
      </Form.Item>
      <Form.Item name="vet">
        <Input placeholder="수의사 이름 검색" />
      </Form.Item>
      <Form.Item name="phone">
        <Input placeholder="전화번호 검색" />
      </Form.Item>
      <Form.Item name="type">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="타입"
          optionFilterProp="children"
          //   filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="dignoses">진단</Option>
          <Option value="diet">식단</Option>
          <Option value="injections">주사</Option>
          <Option value="surgery">수술</Option>
          <Option value="x-ray">X-Ray</Option>
          <Option value="photos">사진</Option>
          <Option value="dental">치아</Option>
        </Select>
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
