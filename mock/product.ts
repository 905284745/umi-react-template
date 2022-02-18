/*
 * @Author: 李家磊
 * @Date: 2022-02-16 15:42:49
 * @LastEditTime: 2022-02-17 16:22:34
 * @LastEditors: 李家磊
 * @Description:
 * @FilePath: /project/mock/product.ts
 */
import { Request, Response } from 'express'
function getProductList(req:Request, res:Response){
  const productList: API.Product[] = [];
  for(let i = 1;i < 100; i++){
    productList.push({
      id: i,
      status: i % 3,
      name: 'product - ' + i,
    })
  }
  res.json(
    {data: productList,
    success: true,
    total: 100,
    pageSize: '20',
    current: 1,
  })
}
export default {
  '/api/product/list': getProductList,
}
