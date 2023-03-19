import React from 'react'
import { memo, ReactNode } from 'react'
import type { FC } from 'react'

export interface IProps {
  children?: ReactNode
}

const HomeLongFor: FC<IProps> = function (props) {
  const { children } = props

  return (
    <div>
      <h2>HomeLongFor</h2>
    </div>
  )
}

export default HomeLongFor

// 设置一个方便调试的name 可以不写 默认为组件名称
HomeLongFor.displayName = 'HomeLongFor'
