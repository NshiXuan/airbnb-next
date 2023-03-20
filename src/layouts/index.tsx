import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer/AppFooter'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const Layout: FC<IProps> = memo(function (props) {
  const { children } = props

  return (
    <div>
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  )
})

export default Layout

// 设置一个方便调试的name 可以不写 默认为组件名称
Layout.displayName = 'Layout'
