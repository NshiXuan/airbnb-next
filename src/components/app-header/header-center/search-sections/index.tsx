import React from 'react'
import { memo, ReactNode } from 'react'
import type { FC } from 'react'

export interface IProps {
  searchInfo?: {
    title: string
    desc: string
  }[]
}

// memo浅层比较
const SearchSections: FC<IProps> = memo(function (props) {
  const { searchInfo } = props

  return (
    <div className="flex">
      {searchInfo?.map((item, index) => {
        return (
          <div className="flex w-[220px]" key={item.title}>
            {index !== 0 && (
              <div className="h-[30px] w-[1px] bg-slate-300"></div>
            )}
            <div className="ml-4">
              <div className=" font-bold">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
})

export default SearchSections

// 设置一个方便调试的name 可以不写 默认为组件名称
SearchSections.displayName = 'SearchSections'
