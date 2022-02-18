/*
 * @Author: lijialei
 * @Date: 2022-02-09 11:12:24
 * @Last Modified by: lijialei
 * @Last Modified time: 2022-02-09 13:41:38
 */
import React, { ReactNode } from 'react'

// interface IProps{
//   children?:ReactNode
// }

// function Index(props: IProps){
//   return(
//     <>
//       {props?.children}
//     </>
//   )
// }

function Index({ children }: {children?: ReactNode}){
  return(
    <div style={{ color: "red"}}>
      {children}
    </div>
  )
}

export default Index
