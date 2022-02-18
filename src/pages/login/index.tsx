import { Button, Form, Input, message } from "antd";
import React from "react";
import { history } from "umi";
import { doLogin } from "../user/user";

/*
 * @Author: 李家磊
 * @Date: 2022-02-14 13:31:21
 * @LastEditTime: 2022-02-15 16:11:58
 * @LastEditors: 李家磊
 * @Description:
 * @FilePath: /project/src/pages/login/index.tsx
 */
function index(){
  const login = (user: API.IUser) => {
    doLogin(user).then(response => {
      if(response.code === 0){
        history.push('/')
      }else{
        message.error('登录失败')
      }
    })
  }
  return (
    <>
      <Form
        onFinish={login}
        labelCol={{ span: 8}}
        wrapperCol={{ span: 8 }}
      >
        <Form.Item
          label='用户名' name='name'
          rules={[
            {
              type: 'string',
              required: true,
              message: '用户名不能为空'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='密码' name='password'
          rules={[
            {
              type: 'string',
              required: true,
              message: '密码不能为空'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16}}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default index
