import { LongItemType } from '@/service/modules/home.type'
import type { FC } from 'react'

export interface IProps {
  itemData?: LongItemType
}

const LongForItem: FC<IProps> = function (props) {
  const { itemData } = props

  return (
    <div className="relative flex-shrink-0 w-[20%] px-2 overflow-hidden">
      <img src={itemData?.picture_url} alt={itemData?.city} />

      {/* 实现底部阴影 */}
      <div className=" absolute left-2 right-2 bottom-0 h-[60%] bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgb(0,0,0)] "></div>

      {/* 内容 */}
      <div className=" absolute z-10 left-2 right-2 bottom-0 flex flex-col items-center justify-center pb-8 px-6 text-white">
        <div className=" font-bold mb-2">{itemData?.city}</div>
        <div>均价 {itemData?.price}</div>
      </div>
    </div>
  )
}

export default LongForItem

// 设置一个方便调试的name 可以不写 默认为组件名称
LongForItem.displayName = 'LongForItem'
