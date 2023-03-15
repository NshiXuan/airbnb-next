import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import RoomItem from '../room-item'
import { HomeGoodPriceItem } from '@/service/modules/home.type'

export interface IProps {
  rooms?: HomeGoodPriceItem[]
  width?: '20%' | '25%' | '33%'
}

// memo浅层比较
const SectionRooms: FC<IProps> = memo(function (props) {
  const { rooms, width } = props

  return (
    <div className="flex flex-wrap -mx-2">
      {rooms?.slice(0, 8).map((item: any) => {
        return <RoomItem itemData={item} width={width} key={item.id} />
      })}
    </div>
  )
})

export default SectionRooms

// 设置一个方便调试的name 可以不写 默认为组件名称
SectionRooms.displayName = 'SectionRooms'
