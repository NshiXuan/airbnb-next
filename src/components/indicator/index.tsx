import React, { useEffect, useRef } from 'react'
import { ReactNode } from 'react'
import type { FC } from 'react'

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

    // 5.计算滚动的的距离
    // let distance = itemLeft + itemWidth * 0.5 - dotsWidth
    let distance = itemLeft + itemWidth - dotsWidth

    // 6.计算可滚动的总距离
    const dotsScroll = dotsRef.current?.scrollWidth!
    const totalDistance = dotsScroll - dotsWidth

    // 7.边界判断
    // 左边边界判断
    if (distance < 0) distance = 0
    // 右边边界判断
    if (distance > totalDistance) distance = totalDistance

    // console.log(distance)
    dotsRef.current!.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <div className="flex transition duration-200 ease-in-out  " ref={dotsRef}>
      {children}
    </div>
  )
}

export default Indicator

// 设置一个方便调试的name 可以不写 默认为组件名称
Indicator.displayName = 'Indicator'
