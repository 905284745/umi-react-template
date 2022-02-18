/*
 * @Author: 李家磊
 * @Date: 2022-02-16 09:53:08
 * @LastEditTime: 2022-02-17 17:27:57
 * @LastEditors: 李家磊
 * @Description:
 * @FilePath: /project/src/pages/product/index.tsx
 */
import React from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import ProTable, { ProColumns } from '@ant-design/pro-table'
import { getProductList } from '@/services/ant-design-pro/product'
import { Button } from 'antd'

function index() {
  const columns: ProColumns<API.Product>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      // hideInSearch: true
      tooltip: 'id要唯一'
    },
    {
      title: '产品名称',
      dataIndex: 'name',
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: {
          text: '默认',
          status: 'Default'
        },
        1: {
          text: '正常',
          status: 'Success'
        },
        2: {
          text: '缺货',
          status: 'Error'
        }
      }
    },
    {
      title: '操作',
      valueType: 'option',
      render: (text, record, _, action) => [
        <Button
          key="editable"
          type="primary"
          onClick={()=>{
            action?.startEditable(record.id)
          }}
        >编辑</Button>,
      ],
    },
  ]
  return (
    <>
      <PageContainer>
        <ProTable<API.Product, API.PageParams> columns={columns} request={getProductList}></ProTable>
      </PageContainer>
    </>
  )
}

export default index
