import { NamesType } from '@/service/modules/home.type'
import type { FC } from 'react'
import { memo, useState } from 'react'

export interface IProps {
  tabNames: any[] | undefined
  tabClick: (index: number, name: NamesType) => void
}

// memo浅层比较
const SectionTabs: FC<IProps> = function (props) {
  const { tabNames, tabClick } = props

  // 定义选中的标签
  const [currentIndex, setCurrentIndex] = useState(0)

  // item点击
  function itemClickHandle(index: number, name: string) {
    setCurrentIndex(index)
    tabClick(index, name as NamesType)
  }

  return (
    // overflow-x-auto
    <div className="flex   ">
      {tabNames?.map((item, index) => {
        return (
          <div
            className="
               box-border basis-[120px] flex-shrink-0 py-[14px] px-[16px] mr-4 text-[17px] text-center border whitespace-nowrap rounded cursor-pointer boxShadow
            "
            style={
              currentIndex === index
                ? { background: '#00848A', color: '#fff' }
                : {}
            }
            key={item?.key}
            onClick={(e) => itemClickHandle(index, item?.key)}
          >
            {/* {item?.data?.weather?.date} */}
            分类
            
          </div>
        )
      })}
    </div>
  )
}

export default SectionTabs

// 设置一个方便调试的name 可以不写 默认为组件名称
SectionTabs.displayName = 'SectionTabs'
