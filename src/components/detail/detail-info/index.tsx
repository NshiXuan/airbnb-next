import React from 'react'
import { ReactNode } from 'react'
import type { FC } from 'react'

export interface IProps {
  children?: ReactNode
}

const DetailInfo: FC<IProps> = function (props) {
  const { children } = props

  return (
    <div>
      <h2>DetailInfo</h2>
    </div>
  )
}

export default DetailInfo

// 设置一个方便调试的name 可以不写 默认为组件名称
DetailInfo.displayName = 'DetailInfo'
