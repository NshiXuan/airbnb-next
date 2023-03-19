import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import classNames from 'classnames'

export interface IProps {
  name?: string
}

// memo浅层比较
const SectionFooter: FC<IProps> = function (props) {
  const { name } = props

  let showMessage = '显示全部'
  if (name) {
    showMessage = `显示更多${name}`
  }

  return (
    <div
      className={classNames('flex items-center mt-[15px]', {
        'text-secondary-color': name
      })}
    >
      <div className="flex items-center cursor-pointer text-[17px] font-bold hover:underline gap-2 ">
        <span className=" ">{showMessage}</span>
        <IconMoreArrow />
      </div>
    </div>
  )
}

export default SectionFooter

// 设置一个方便调试的name 可以不写 默认为组件名称
SectionFooter.displayName = 'SectionFooter'
