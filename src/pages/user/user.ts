import { request } from "@/.umi/plugin-request/request"

/*
 * @Author: 李家磊
 * @Date: 2022-02-14 15:42:55
 * @LastEditTime: 2022-02-14 16:59:13
 * @LastEditors: 李家磊
 * @Description:
 * @FilePath: /project/src/pages/user/user.ts
 */
export const doLogin = async (user: API.IUser) => {
  return await request('/api/users/login',{method: 'post', data: user})
}
