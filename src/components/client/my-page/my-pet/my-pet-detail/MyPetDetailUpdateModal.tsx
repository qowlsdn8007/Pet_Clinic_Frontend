import React from 'react';
import { Modal, Form, Input, InputNumber } from 'antd';

interface Props {
    isVisible: boolean,
    setIsVisible: (visible: boolean) => void
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};


const MyPetDetailUpdateModal: React.FC<Props> = ({ isVisible, setIsVisible }: Props) => {
    const label = ["반려동물 생일", "반려동물 품종", "성별", "몸무게", "보호자 이름", "보호자 연락처"];
    const handleOk = () => {
        setIsVisible(false);
    }
    const handleCancle = () => {
        setIsVisible(false);
    }

    return <>
        <Modal title="반려동물 정보수정" visible={isVisible} onOk={handleOk} onCancel={handleCancle}>
            <Form {...layout} name="nest-messages">
                <Form.Item name={['user', 'name']} label="반려동물 이름" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                {label.map(item => <Form.Item label={item}><Input /></Form.Item>)}
            </Form>
        </Modal>
    </>
}

export default MyPetDetailUpdateModal;