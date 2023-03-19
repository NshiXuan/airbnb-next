import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import RoomItem from '../room-item'
import { HomeItem } from '@/service/modules/home.type'

export interface IProps {
  rooms?: HomeItem[]
  width?: '20%' | '25%' | '33%'
  source?: number;
}

// memo浅层比较
const SectionRooms: FC<IProps> = memo(function (props) {
  const { rooms, width, source} = props
  console.log(rooms, JSON.stringify(rooms), 'xl')

  return (
    <div className="flex flex-wrap ml-16">
      {rooms?.data?.hotProduct?.slice(0,6)?.map((item: any) => {
        return <RoomItem itemData={item} width={ width} key={item.id} source={source}/>
      })}
    </div>
  )
})

export default SectionRooms

// 设置一个方便调试的name 可以不写 默认为组件名称
SectionRooms.displayName = 'SectionRooms'
