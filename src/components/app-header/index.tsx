import React, { useRef, useState } from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import HeaderLeft from './header-left'
import HeaderCenter from './header-center'
import HeaderRight from './header-right'
import { useSelector } from 'react-redux'
import { IRootState } from '@/store'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'

export interface IProps {}

// memo浅层比较
const AppHeader: FC<IProps> = memo(function (props) {
  const [isSearch, setIsSearch] = useState(false)
  // const [isAlpha, setIsAlpha] = useState(false)

  const { headerConfig } = useSelector((state: IRootState) => state.main)
  const { isFixed } = headerConfig!

  let isAlpha = true
  // 监听滚动
  if (typeof window === 'object') {
    const { scrollY } = useScrollPosition()
    let prevScrollY = useRef(0)
    // 当未打卡搜索栏时 记录当前滚动位置
    if (!isSearch) prevScrollY.current = scrollY
    // 当打开搜索栏后 根据当前滚动位置-未打开搜索栏时的位置的绝对值（上下都可以滚动）>30就隐藏搜索栏
    if (isSearch && Math.abs(scrollY - prevScrollY.current) > 30)
      setIsSearch(false)

    location.pathname == '/' ? (isAlpha = scrollY == 0) : (isAlpha = false)
  }

  return (
    <div
      className={`
        ${isFixed && 'fixed top-0 left-0 right-0 z-[999]'}
      `}
    >
      <div
        className={`relative z-20 ${
          isAlpha ? 'bg-transparent' : 'bg-white border-b-2'
        }   `}
      >
        <div className="flex items-center h-20">
          <HeaderLeft />

          <HeaderCenter
            isSearch={isAlpha || isSearch}
            isAlpha={isAlpha}
            searchBarClick={() => setIsSearch(true)}
          />

          <HeaderRight isAlpha={isAlpha} />
        </div>

        <div
          className={`${
            isAlpha || isSearch ? 'h-[100px]' : 'h-0'
          } transition-height duration-300`}
        ></div>
      </div>

      {/* 遮罩层 */}
      {isSearch && (
        <div
          className={`fixed top-0 bottom-0 left-0 right-0 z-10 bg-[rgb(0,0,0,.3)]`}
          onClick={(e) => setIsSearch(false)}
        ></div>
      )}
    </div>
  )
})

export default AppHeader

// 设置一个方便调试的name 可以不写 默认为组件名称
AppHeader.displayName = 'AppHeader'
