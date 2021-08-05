import { useHistory } from 'react-router-dom';

import styles from './home.module.css';
import { Button } from 'antd';

function Home() {
  const history = useHistory();

  function goToLogin(): void {
    console.log(`login `);
    history.push({ pathname: '/login' });
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Pet-Clinic 🐶</h1>
        <div className={styles.button_box}>
          <Button type="primary" htmlType="submit" onClick={goToLogin}>
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
