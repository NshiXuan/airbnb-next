import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

export interface IProps {
  children?: ReactElement
  title?: string
  subTitle?: string
}

// memo浅层比较
const SectionHeader: FC<IProps> = memo(function (props) {
  const { title, subTitle } = props

  return (
    <div className=" text-font-secondary-color pt-20">
      <h2 className="text-[22px] font-[700] mb-4 ">{title}</h2>
      {subTitle && <div className="text-[16px] mb-5">{subTitle}</div>}
    </div>
  )
})

export default SectionHeader

// 设置一个方便调试的name 可以不写 默认为组件名称
SectionHeader.displayName = 'SectionHeader'
