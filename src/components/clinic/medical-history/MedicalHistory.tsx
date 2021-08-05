import React, { Component, useState, useEffect } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import MedicalHistoryList from './MedicalHistoryList';
import MedicalHistoryRepository from 'src/service/medical-history/medicalHistoryRepository';
import styles from './medical-history.module.css';
import MedicalHistorySearch from './MedicalHistorySearch';

type historyData = {
  key: number;
  date: string;
  visitor: string;
  pet: string;
  vet: string;
  reservation_type: string;
};

function MedicalHistory() {
  const [list, setList] = useState<Object[] | undefined>(undefined);
  // const medicalHistoryRepository = new MedicalHistoryRepository();
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
  const listData = [
    {
      key: 1,
      date: '2021-07-27',
      visitor: '이시은',
      pet: '땡이',
      vet: '수의사1',
      reservation_type: '예약',
    },
    {
      key: 2,
      date: '2021-07-27',
      visitor: '이시금',
      pet: '콩이',
      vet: '수의사2',
      reservation_type: '방문',
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
  // useEffect(() => {
  //   const readList = medicalHistoryRepository.readMedicalHistory();

  //   return () => {
  //     setList(readList);
  //   };
  // });
  const onSearch = (values: any) => {
    console.log(values);
    //update List
    setList(listData);
  };

  return (
    <div className={styles.container}>
      <MedicalHistorySearch onSearch={onSearch} validateMessages={validateMessages} />
      <MedicalHistoryList list={list} />
    </div>
  );
}

export default MedicalHistory;
