import classNames from 'classnames'
import { FC, memo } from 'react'
import { useState } from 'react'

export interface IProps {
  titles?: string[]
  tabClick?: (index: number) => void
}

// memo浅层比较
const SearchTabs: FC<IProps> = memo(function (props) {
  const { titles, tabClick } = props

  const [currentIndex, setcurrentIndex] = useState(0)

  function HandleItemClick(index: number) {
    setcurrentIndex(index)

    tabClick && tabClick(index)
  }

  return (
    <div className="flex justify-center items-center gap-5 text-[16px]">
      {titles?.map((item, index) => {
        return (
          <div
            className="box-border"
            key={item}
            onClick={(e) => HandleItemClick(index)}
          >
            <span
              className="py-2 cursor-pointer"
              style={
                currentIndex === index
                  ? { borderBottom: '3px solid black' }
                  : {}
              }
            >
              {item}
            </span>
            <span className="buttom"></span>
          </div>
        )
      })}
    </div>
  )
})

export default SearchTabs

// 设置一个方便调试的name 可以不写 默认为组件名称
SearchTabs.displayName = 'SearchTabs'
