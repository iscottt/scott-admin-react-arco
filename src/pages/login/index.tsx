import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import LoginForm from './form';
import styles from './style/index.module.less';
import { Card } from '@arco-design/web-react';

function Login() {
  useEffect(() => {
    document.body.setAttribute('arco-theme', 'light');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Card>
          <LoginForm />
        </Card>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
Login.displayName = 'LoginPage';

export default Login;
