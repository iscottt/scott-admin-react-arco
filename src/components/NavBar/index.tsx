import React, { useContext, useState } from 'react';
import {
  Tooltip,
  Avatar,
  Dropdown,
  Menu,
  Message,
} from '@arco-design/web-react';
import {
  IconSunFill,
  IconMoonFill,
  IconPoweroff,
  IconLoading,
  IconFullscreenExit,
  IconFullscreen,
} from '@arco-design/web-react/icon';
import { useSelector } from 'react-redux';
import { GlobalState } from '@/store';
import { GlobalContext } from '@/context';
import Logo from '@/assets/logo.svg';
import IconButton from './IconButton';
import styles from './style/index.module.less';
import useStorage from '@/hooks/useStorage';
import screenfull from 'screenfull';

function Navbar({ show }: { show: boolean }) {
  const { userInfo, userLoading } = useSelector((state: GlobalState) => state);

  const [_, setUserStatus] = useStorage('userStatus');
  const { theme, setTheme } = useContext(GlobalContext);
  const [isFull, setIsFull] = useState(false);

  function logout() {
    setUserStatus('logout');
    window.location.href = '/login';
  }

  function onMenuItemClick(key) {
    if (key === 'logout') {
      logout();
    } else {
      Message.info(`You clicked ${key}`);
    }
  }

  const toggleFull = () => {
    screenfull.toggle();
    setIsFull(!isFull);
  };

  const droplist = (
    <Menu onClickMenuItem={onMenuItemClick}>
      <Menu.Item key="logout">
        <IconPoweroff className={styles['dropdown-icon']} />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo />
          <div className={styles['logo-name']}>Scott Admin</div>
        </div>
      </div>
      <ul className={styles.right}>
        <li>
          <Tooltip content={isFull ? '点击退出全屏模式' : '点击进入模式'}>
            <IconButton
              icon={isFull ? <IconFullscreenExit /> : <IconFullscreen />}
              onClick={toggleFull}
            />
          </Tooltip>
        </li>
        <li>
          <Tooltip
            content={
              theme === 'light' ? '点击切换为夜间模式' : '点击切换为日间模式'
            }
          >
            <IconButton
              icon={theme !== 'dark' ? <IconMoonFill /> : <IconSunFill />}
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            />
          </Tooltip>
        </li>
        {userInfo && (
          <li>
            <Dropdown droplist={droplist} position="br" disabled={userLoading}>
              <div className={styles['username-wrap']}>
                <Avatar size={32} style={{ cursor: 'pointer' }}>
                  {userLoading ? (
                    <IconLoading />
                  ) : (
                    <img alt="avatar" src={userInfo.avatar} />
                  )}
                </Avatar>
                <span className={styles.username}>{userInfo.name}</span>
              </div>
            </Dropdown>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
