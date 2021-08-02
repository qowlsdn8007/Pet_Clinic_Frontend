class MedicalHistoryRepository {
  readMedicalHistory() {
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
    return () => listData;
  }
}

export default MedicalHistoryRepository;
