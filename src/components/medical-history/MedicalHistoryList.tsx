import { Table } from 'antd';
import styles from './medical-history.module.css';

function MedicalHistoryList() {
  const dataSource = [
    {
      key: 1,
      date: '2021-07-27',
      visitor: '이시은',
      pet: '땡이',
      vet: '수의사1',
      reservation_type: '?',
    },
    {
      key: 2,
      date: '2021-07-27',
      visitor: '이시금',
      pet: '콩이',
      vet: '수의사2',
      reservation_type: '?',
    },
    {
      key: 3,
      date: '2021-07-27',
      visitor: '이시동',
      pet: '융아',
      vet: '수의사2',
      reservation_type: '?',
    },
  ];

  const columns = [
    {
      title: '날짜',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '방문자',
      dataIndex: 'visitor',
      key: 'visitor',
    },
    {
      title: '반려동물',
      dataIndex: 'pet',
      key: 'pet',
    },
    {
      title: '진료 수의사',
      dataIndex: 'vet',
      key: 'vet',
    },
    {
      title: '예약 종류',
      dataIndex: 'reservation_type',
      key: 'reservation_type',
    },
  ];

  return (
    <div className={styles.table}>
      <Table dataSource={dataSource} columns={columns} size="middle" bordered />
    </div>
  );
}

export default MedicalHistoryList;
