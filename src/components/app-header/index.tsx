import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import HeaderLeft from './header-left'
import HeaderCenter from './header-center'
import HeaderRight from './header-right'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const AppHeader: FC<IProps> = memo(function (props) {
  // const { children } = props

  return (
    <div className="flex h-20 items-center border-b border-b-[#eee]">
      <HeaderLeft />

      <HeaderCenter />

      <HeaderRight />
    </div>
  )
})

export default AppHeader

// 设置一个方便调试的name 可以不写 默认为组件名称
AppHeader.displayName = 'AppHeader'
