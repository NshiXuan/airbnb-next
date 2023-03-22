import Indicator from '@/components/indicator'
import { FC, useState } from 'react'

export interface IProps {}

const Demo: FC<IProps> = function (props) {
  const names = ['abc', 'cba', 'nba', 'aaa', 'bbb', 'ccc', 'ddd']

  const [selectIndex, setSelectIndex] = useState(0)

  function toggleClickHandle(isNext: boolean) {
    // 1.如果点击下一个 index+1 上一个-1
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    // 2.如果小于0 index设为最后一个
    if (newIndex < 0) newIndex = names.length - 1
    // 3.如果大于最后一个 index设为第一个
    if (newIndex > names.length - 1) newIndex = 0

    setSelectIndex(newIndex)
  }

  return (
    <div>
      <div>
        <button onClick={(e) => toggleClickHandle(false)}>上一个</button>
        <button onClick={(e) => toggleClickHandle(true)}>下一个</button>
      </div>
      <div>
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return (
              <button className="flex-grow-0 border" key={item}>
                {item}
              </button>
            )
          })}
        </Indicator>
      </div>
    </div>
  )
}

export default Demo

// 设置一个方便调试的name 可以不写 默认为组件名称
Demo.displayName = 'Demo'
