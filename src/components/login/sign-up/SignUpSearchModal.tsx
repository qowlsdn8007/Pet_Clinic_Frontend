import { useState } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button, Input, Space } from 'antd';

import SignUpSearchList from './SignUpSearchList';

import styles from './sign-up.module.css';

const { Search } = Input;

type setProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};
function SignUpSearchModal(props: setProps) {
  const history = useHistory();

  const [visible, setVisible] = useState<boolean>(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  // const [modalText, setModalText] = React.useState<string>('병원 검색');

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

  return (
    <div>
      <Button onClick={showModal}>검색</Button>
      <Modal
        title="병원 검색"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className={styles.modal}>
          <Space direction="vertical">
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
            <SignUpSearchList />
          </Space>
        </div>
      </Modal>
    </div>
  );
}

export default SignUpSearchModal;
