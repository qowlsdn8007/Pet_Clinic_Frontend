import { Form, Button } from 'antd';
import { useState } from 'react';
import MyPetDetailUpdateModal from './MyPetDetailUpdateModal';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label}을(를) 입력해주세요',
    types: {
        email: '${label} 형식이 올바르지 않습니다',
        number: '${label} 형식이 올바르지 않습니다',
    },
    number: {
        range: '${label} 숫자는 ${min} 에서 ${max} 사이여야 합니다',
    },
};
/* eslint-enable no-template-curly-in-string */


interface Props {
    data: {
        avatar: string,
        detail: {
            birth: string,
            speices: string,
            sex: string,
            weight: string,
            master: string,
            phoneNum: string
        },
        link: string,
        name: string
    }
}

const MyPetDetailForm = ({ data }: Props) => {
    const onFinish = (values: any) => {
        console.log(values);
    };
    const label = ["반려동물 생일", "반려동물 품종", "성별", "몸무게", "보호자 이름", "보호자 연락처"];
    const detail = data.detail;
    const detail_data = [detail.birth, detail.speices, detail.sex, detail.weight, detail.master, detail.phoneNum];

    const [isVisible, setIsVisable] = useState<boolean>(false);
    const ShowModal = (visible: boolean) => {  // 매개변수까지 같이 받아서 넘겨주자
        setIsVisable(visible);
    }

    return (
        <>
            {console.log(data)}
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item label="반려동물 이름">
                    {data.name}
                </Form.Item>
                {label.map(item => <Form.Item label={item}><p>{detail_data[label.indexOf(item)]}</p></Form.Item>)}
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type='ghost' onClick={() => history.back()}>
                        취소
                    </Button>
                    <Button type="primary" onClick={() => ShowModal(true)} >
                        수정
                    </Button>
                </Form.Item>
            </Form>
            <MyPetDetailUpdateModal isVisible={isVisible} setIsVisible={ShowModal} />
        </>
    );
};

export default MyPetDetailForm;