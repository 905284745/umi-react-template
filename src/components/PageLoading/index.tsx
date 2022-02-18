/*
 * @Author: 李家磊
 * @Date: 2022-02-16 13:52:59
 * @LastEditTime: 2022-02-16 14:10:58
 * @LastEditors: 李家磊
 * @Description:
 * @FilePath: /project/src/components/PageLoading/index.tsx
 */
import React from 'react'
import style from './index.less'


const PageLoading: React.FC = () => {
  return(
    // <div className={style.page_loading_container}>
    //   {/* 加载动画 */}
    //   <div className={style.spinner_box}>
    //     <div className={style.configure_border_1}>
    //       <div className={style.configure_core}></div>
    //     </div>
    //     <div className={style.configure_border_2}>
    //       <div className={style.configure_core}></div>
    //     </div>
    //   </div>
    // </div>
    <h1>loading...</h1>
  )
}

export default PageLoading
