import React, { useState } from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import HeaderLeft from './header-left'
import HeaderCenter from './header-center'
import HeaderRight from './header-right'
import { useSelector } from 'react-redux'
import { IRootState } from '@/store'
import classNames from 'classnames'

export interface IProps {}

// memo浅层比较
const AppHeader: FC<IProps> = memo(function (props) {
  const [isSearch, setIsSearch] = useState(false)

  const { headerConfig } = useSelector((state: IRootState) => state.main)
  const { isFixed } = headerConfig!

  return (
    <div
      className={classNames(' ', {
        'fixed top-0 left-0 right-0 z-[999]': isFixed
      })}
    >
      <div className="relative z-20 bg-white  border-b border-b-[#eee]  ">
        <div className="flex items-center h-20">
          <HeaderLeft />

          <HeaderCenter
            isSearch={isSearch}
            searchBarClick={() => setIsSearch(true)}
          />

          <HeaderRight />
        </div>

        <div
          className="h-0 transition-height duration-300"
          style={isSearch ? { height: '100px' } : {}}
        ></div>
      </div>

      {isSearch && (
        <div
          className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-[rgb(0,0,0,.3)] "
          onClick={(e) => setIsSearch(false)}
        ></div>
      )}
    </div>
  )
})

export default AppHeader

// 设置一个方便调试的name 可以不写 默认为组件名称
AppHeader.displayName = 'AppHeader'
