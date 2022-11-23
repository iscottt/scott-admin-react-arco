import Mock from 'mockjs';
import { isSSR } from '@/utils/is';
import setupMock from '@/utils/setupMock';

if (!isSSR) {
  Mock.XHR.prototype.withCredentials = true;

  setupMock({
    setup: () => {
      // 用户信息
      Mock.mock(new RegExp('/api/user/userInfo'), () => {
        return Mock.mock({
          name: 'Scott',
          avatar:
            'https://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
          permissions: [
            'dashboard:monitor:add',
            'dashboard:workplace:add',
            'list:searchTable:add',
            'form:group:add',
          ],
        });
      });

      const getRouters = () => {
        return [
          {
            name: '仪表盘',
            key: 'dashboard',
            children: [
              {
                name: '工作台',
                key: 'dashboard/workplace',
              },
            ],
          },
          {
            name: '列表页',
            key: 'list',
            children: [
              {
                name: '查询表格',
                key: 'list/search-table',
              },
            ],
          },
        ];
      };

      Mock.mock(new RegExp('/api/user/getRouters'), () => {
        return getRouters();
      });

      // 登录
      Mock.mock(new RegExp('/api/user/login'), (params) => {
        const { userName, password } = JSON.parse(params.body);
        if (!userName) {
          return {
            status: 'error',
            msg: '用户名不能为空',
          };
        }
        if (!password) {
          return {
            status: 'error',
            msg: '密码不能为空',
          };
        }
        if (userName === 'admin' && password === 'admin') {
          return {
            status: 'ok',
          };
        }
        return {
          status: 'error',
          msg: '账号或者密码错误',
        };
      });
    },
  });
}
