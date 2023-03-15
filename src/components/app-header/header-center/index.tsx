import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import IconSearchBar from '@/assets/svg/icon-search-bar'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const HeaderCenter: FC<IProps> = memo(function (props) {
  // const { children } = props

  return (
    <div>
      <div className="flex justify-between items-center w-[300px] h-12 p-2 box-border border rounded-3xl cursor-pointer boxShadow">
        <div className="px-4 text-font-secondary-color font-[600]">
          搜索房源和体验
        </div>

        {/* 搜索Icon */}
        <div className="flex items-center justify-center w-8 h-8 text-[#eee]  rounded-full bg-primary-color">
          <IconSearchBar />
        </div>
      </div>
    </div>
  )
})

export default HeaderCenter

// 设置一个方便调试的name 可以不写 默认为组件名称
HeaderCenter.displayName = 'HeaderCenter'
