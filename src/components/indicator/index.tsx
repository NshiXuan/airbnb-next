import React, { useEffect, useRef } from 'react'
import { ReactNode } from 'react'
import type { FC } from 'react'

import style from './index.module.scss'
import classNames from 'classnames'

export interface IProps {
  children?: ReactNode
  selectIndex?: number
}

const Indicator: FC<IProps> = function (props) {
  const { children, selectIndex = 0 } = props

  // 1.定义获取dots的ref
  const dotsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 2.获取selectIndex对应的子元素
    const selectEL = dotsRef.current?.children[selectIndex!]
    // 3.获取子元素左距离
    const itemLeft = (selectEL as HTMLElement)?.offsetLeft
    // 4.获取子元素本身的宽度
    const itemWidth = (selectEL as HTMLElement)?.clientWidth

    // 5.获取dots本身的宽度
    const dotsWidth = dotsRef.current?.clientWidth!

    // 6.计算滚动的的距离
    // 如果使用这个计算距离 长度大时会居中高亮
    let distance = itemLeft + itemWidth * 0.5 - dotsWidth * 0.5
    // 如果使用这个计算距离 长度大时不会居中高亮
    // let distance = itemLeft + itemWidth - dotsWidth

    // 7.计算可滚动的总距离
    const dotsScroll = dotsRef.current?.scrollWidth!
    const totalDistance = dotsScroll - dotsWidth

    // 8.边界判断
    // 左边边界判断
    if (distance < 0) distance = 0
    // 右边边界判断
    if (distance > totalDistance) distance = totalDistance

    // console.log(distance)
    dotsRef.current!.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <div className="overflow-hidden">
      <div
        className={classNames(
          'flex transition duration-200 ease-in-out ',
          style.scroll
        )}
        ref={dotsRef}
      >
        {children}
      </div>
    </div>
  )
}

export default Indicator

// 设置一个方便调试的name 可以不写 默认为组件名称
Indicator.displayName = 'Indicator'
