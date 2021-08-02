import { Table, Button } from 'antd';
import MedicalHistoryAddForm from './MedicalHistoryAddForm';
import styles from './medical-history.module.css';

type listProps = {
  list: Object[] | undefined;
};
function MedicalHistoryList({ list }: listProps) {
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
      <MedicalHistoryAddForm />
      <Table dataSource={list} columns={columns} size="middle" bordered />
    </div>
  );
}

export default MedicalHistoryList;
