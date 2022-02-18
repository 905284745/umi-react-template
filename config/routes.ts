/*
 * @Author: 李家磊
 * @Date: 2022-02-07 10:21:07
 * @LastEditTime: 2022-02-16 13:40:20
 * @LastEditors: 李家磊
 * @Description:
 * @FilePath: /project/config/routes.ts
 */
export default [
  {
    path: '/',
    component: '@/pages/index',
    // name: 'overview',
  },
  {
    path: '/product',
    name: '产品管理',
    component: '@/pages/product'
  },
  {
    path: '/login',
    component: '@/pages/login/index',
    // name: 'login',
    layout: 'false'
  },
  {
    path: '/',
    component: '@/layouts/index',
    access: 'isAdmin',
    name: 'layout',
    routes: [
      {
        path: '/user',
        exact: false,
        component: '@/pages/user/index',
        access: 'isEditor',
        name: 'user',
        wrappers: [
          '@/wrappers/auth'
        ],  /* wrappers高阶组件，存在时直接覆盖component，可以在wrappers中的页面代码中写入权限判断 */
      },
      {
        path: '/userInfo',
        name: 'userInfo',
        access:'canAccess',
        exact: false,
        component: '@/pages/user/index',
      }
    ]
  },
];
