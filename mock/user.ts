/*
 * @Author: lijialei
 * @Date: 2022-02-09 16:27:59
 * @Last Modified by: lijialei
 * @Last Modified time: 2022-02-10 11:53:36
 */
import { Request, Response } from 'express'
import mockjs from 'mockjs'
export default {
  // 支持值为Object和Array
  'GET /api/users': (req: Request, res: Response) =>
  {
    const data = mockjs.mock({
      'data|100': [{ name:'@cname', 'value|1-100':50, 'type|0-2':1}],
    })
    res.json({
      data: data,
      code: 0,
      msg: 'success'
    })
  },
  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，api 参考 express@4
  'POST /api/users/create': (req: Request, res: Response) => {
    // 添加跨域请求头
    res.setHeader('Access-Controller-Allow-Origin', '*');
    res.end('ok');
  },
  'delete /api/user/:id': (req: Request,res: Response) =>
  {
    res.setHeader('Access-Controller-Allow-Origin','*');
    res.json({code:0})
  },
  'put /api/user/:id': (req: Request,res: Response) =>
  {
    res.setHeader('Access-Controller-Allow-Origin','*');
    res.json({code:1})
  },
  'POST /api/users/login': (req: Request, res: Response) => {
    res.setHeader('Access-Controller-Allow-Origin','*');
    if(Math.random() > 0.5){
      res.json({ code: 0 })
    }else{
      res.json({ code: 1 })
    }
  }
}
