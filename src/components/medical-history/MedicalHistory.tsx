import React, { Component } from 'react';
import { Table, Tag, Space } from 'antd';
import MedicalHistoryList from './MedicalHistoryList';

import styles from './medical-history.module.css';
import MedicalHistorySearch from './MedicalHistorySearch';

function MedicalHistory() {
  return (
    <div className={styles.container}>
      <MedicalHistorySearch />
      <MedicalHistoryList />
    </div>
  );
}

export default MedicalHistory;
