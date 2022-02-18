import { Button, Space } from 'antd';
import React from 'react';
import { Access, Link, useAccess, useHistory, useModel } from 'umi';

/*
 * @Author: lijialei
 * @Date: 2022-02-07 10:42:00
 * @Last Modified by: lijialei
 * @Last Modified time: 2022-02-10 14:40:55
 */
const Index = () => {
  const history = useHistory();
  const { initialState } = useModel('@@initialState');
  const { user, singin, singout } = useModel('user');
  // const access = useAccess();
  // if (access.isAdmin) {
  //   return null;
  // }
  return (
    <>
      {initialState?.id}
      <br />
      {initialState?.name}
      <br />

      {user?.id}
      <br />
      {user?.name}
      <br />
      <Space>
        {/* <Access accessible={access.isAdmin !== undefined && access.isAdmin}
        >
          <Button type="primary">test</Button>
        </Access> */}
        <Button
          type="primary"
          onClick={() => {
            singin('幻', '123456');
          }}
        >
          登录
        </Button>
        <Button
          type="primary"
          onClick={() => {
            singout();
          }}
        >
          登出
        </Button>
      </Space>
      <Link to="/userInfo">Users Page</Link>
      <br />
      <Button
        type="primary"
        onClick={() => {
          history.push('/userinfo');
        }}
      >
        go2UserInfo
      </Button>
      <div>user index</div>
    </>
  );
};
export default Index;
