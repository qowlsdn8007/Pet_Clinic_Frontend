import MedicalHistoryList from './MedicalHistoryList';
import { Button, Modal, Space, Form, Input, Select, InputNumber, Upload } from 'antd';
import { useState } from 'react';

import styles from './medical-history.module.css';
import { UploadOutlined } from '@ant-design/icons';

type ValidateStatus = Parameters<typeof Form.Item>[0]['validateStatus'];

function MedicalHistoryAddForm() {
  const { Option } = Select;
  const { TextArea } = Input;
  const [number, setNumber] = useState<{
    value: number;
    validateStatus?: ValidateStatus;
    errorMsg?: string | null;
  }>({
    value: 0,
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  // const [modalText, setModalText] = React.useState<string>('병원 검색');

  function validatePrimeNumber(number: number): { validateStatus: ValidateStatus; errorMsg: string | null } {
    if (typeof number === 'number') {
      return {
        validateStatus: 'success',
        errorMsg: null,
      };
    }
    return {
      validateStatus: 'error',
      errorMsg: '숫자를 입력해주세요:)',
    };
  }
  // const tips = '숫자를 입력해주세요:)';

  const showModal = () => {
    setVisible(true);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const onSearch = (value: string) => console.log(value);

  const onNumberChange = (value: number) => {
    setNumber({
      ...validatePrimeNumber(value),
      value,
    });
  };
  return (
    <div className={styles.add_form}>
      <Button onClick={showModal} className={styles.button}>
        생성
      </Button>
      <Modal
        title="의료 기록 생성"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className={styles.modal}>
          <Space direction="vertical">
            <Form>
              <Form.Item name="vet" rules={[{ required: true }]}>
                <Input placeholder="수의사" />
              </Form.Item>
              <Form.Item name="pet" rules={[{ required: true }]}>
                <Input.Password placeholder="반려동물" />
              </Form.Item>
              <Form.Item name="type" rules={[{ required: true }]}>
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
              <Form.Item name="description">
                <TextArea placeholder="설명" rows={4} />
              </Form.Item>
              <Form.Item name="quantity" validateStatus={number.validateStatus} help={number.errorMsg}>
                <InputNumber placeholder="수량" min={0} max={1000} value={number.value} onChange={onNumberChange} />
              </Form.Item>
              <Form.Item name="amount" validateStatus={number.validateStatus} help={number.errorMsg}>
                <InputNumber placeholder="양" min={0} max={1000} value={number.value} onChange={onNumberChange} />
              </Form.Item>
              <Form.Item name="photo" validateStatus={number.validateStatus} help={number.errorMsg}>
                <Space direction="vertical" style={{ width: '100%' }} size="small">
                  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture" maxCount={1}>
                    <Button icon={<UploadOutlined />}>사진 업로드</Button>
                  </Upload>
                </Space>
              </Form.Item>
              <Form.Item name="xls">
                <Space direction="vertical" style={{ width: '100%' }} size="small">
                  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" maxCount={1}>
                    <Button icon={<UploadOutlined />}>XLS</Button>
                  </Upload>
                </Space>
              </Form.Item>
            </Form>
          </Space>
        </div>
      </Modal>
    </div>
  );
}

export default MedicalHistoryAddForm;
