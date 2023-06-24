import { FC, useState } from 'react'

export interface IProps {
  tabList?: string[]
}

const EntireFilter: FC<IProps> = function (props) {
  const { tabList } = props

  // 1.记录选中item的数组
  const [selectItems, setSelectItems] = useState<any>([])

  // 2.点击高亮 再点击取消高亮
  function itemClickHandle(item: any) {
    const newItems = [...selectItems]
    // 2.1如果高亮数组中已经有了 移除
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex((name) => name == item)
      newItems.splice(itemIndex, 1)
    } else {
      // 2.2 没有加入数组
      newItems.push(item)
    }
    setSelectItems(newItems)
  }

  return (
    <div className="flex items-center h-12 pl-4 border-b bg-white fixed top-[80px] left-0 right-0  z-[999]">
      {tabList?.map((item, index) => {
        return (
          <div
            className="mx-2 py-[6px] px-3 border text-font-primary-color cursor-pointer rounded "
            onClick={(e) => itemClickHandle(item)}
            style={
              selectItems.includes(item)
                ? { background: '#008489', color: '#fff' }
                : {}
            }
            key={item}
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default EntireFilter

// 设置一个方便调试的name 可以不写 默认为组件名称
EntireFilter.displayName = 'EntireFilter'
