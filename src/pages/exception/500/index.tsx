import React from 'react';
import { Result, Button } from '@arco-design/web-react';
import styles from './style/index.module.less';

function Exception500() {
  return (
    <div className={styles.wrapper}>
      <Result
        className={styles.result}
        status="500"
        subTitle="抱歉，服务器出了点问题～"
        extra={
          <Button key="back" type="primary">
            返回
          </Button>
        }
      />
    </div>
  );
}

export default Exception500;
