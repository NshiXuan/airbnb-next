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
        <div className="px-4 text-font-secondary-color font-[400]">
          搜索您想要的商品
        </div>
        {/* <input
              aria-label="搜索"
              type="text"
              className="px-4 text-font-secondary-color font-[600]"
              // onChange={(e) => setSearchValue(e.target.value)}
              placeholder="搜索您想要的商品"
              // className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            /> */}
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
