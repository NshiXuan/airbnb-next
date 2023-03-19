import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import classNames from 'classnames'
import { FC, memo } from 'react'
import { ReactNode, useEffect, useRef, useState } from 'react'

import style from './index.module.scss'

export interface IProps {
  children?: ReactNode
}

const ScrollView: FC<IProps> = memo(function (props) {
  const { children } = props

  // 1.定义是否显示滚动箭头icon
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)

  // 2.定义获取滚动内容的ref
  const scrollContentRef = useRef<HTMLDivElement>(null)

  // 3.定义记录可滚动的距离
  const [totalDistance, settotalDistance] = useState(0)

  // 4.DOM加载完后通过ref获取可滚动距离
  useEffect(() => {
    // current可以拿到DOM
    // 4.1 获取scrollWidth代表可滚动的宽度
    const scrollWidth = scrollContentRef.current?.scrollWidth!
    // 4.2 获取clientWidth代表占据的宽度
    const clientWidth = scrollContentRef.current?.clientWidth!
    // 4.3 计算可滚动的距离
    const scrollDistance = scrollWidth - clientWidth

    // 4.4 记录可滚动的距离
    settotalDistance(scrollDistance)

    // 4.5 如果不能往右滚动了就隐藏右箭头
    setShowRight(scrollDistance > 0)
  }, [])

  // 5.点击箭头实现滚动
  // 5.1 记录当前需要滚动div的下标 默认为第一个
  const [posIndex, setPosIndex] = useState(0)
  function controlClickHandle(isRight: boolean) {
    // 5.2判断是否左滚动还是右滚动
    const newIndex = isRight ? posIndex + 1 : posIndex - 1

    // 5.3获取滚动内容的div
    const childrenDiv = scrollContentRef.current?.children[
      newIndex
    ] as HTMLDivElement

    // 5.4通过内容的div获取距离父盒子的左距离offsetLeft(左边距离父盒子的宽度相对于上一级的定位元素/table、td、th 如果没有定位元素则为body 详细看MDN)作为滚动距离
    const offsetLeft = childrenDiv.offsetLeft

    // 5.5通过ref的style实现滚动
    scrollContentRef.current!.style.transform = `translate(-${offsetLeft}px)`

    // 5.6设置下一个滚动div的下标
    setPosIndex(newIndex)

    // 5.7是否继续显示右边的按钮
    // 如果滚动距离大于左边第一个盒子距离父盒子的左距离 显示右边滚动icon
    setShowRight(totalDistance > offsetLeft)
    // 如果左边第一个盒子距离父盒子的左距离大于0 才能向左滚动
    setShowLeft(offsetLeft > 0)
  }

  return (
    <div className="relative ">
      {/* 箭头Icon */}
      {showLeft && (
        <div
          className={classNames(
            'w-fit left-0 top-1/2',
            style.control,
            style.left
          )}
          onClick={(e) => controlClickHandle(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className={classNames(
            'w-fit right-0 top-1/2',
            style.control,
            style.right
          )}
          onClick={(e) => controlClickHandle(true)}
        >
          <IconArrowRight />
        </div>
      )}

      {/* 插槽 */}
      {/* 添加动画 */}
      <div className="relative overflow-hidden">
        <div className="flex transition duration-250 " ref={scrollContentRef}>
          {children}
        </div>
      </div>
    </div>
  )
})

export default ScrollView

// 设置一个方便调试的name 可以不写 默认为组件名称
ScrollView.displayName = 'ScrollView'
