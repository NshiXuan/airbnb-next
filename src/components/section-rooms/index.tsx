import { HomeItem } from '@/service/modules/home.type'
import { FC } from 'react'
import RoomItem from '../room-item'

export interface IProps {
  rooms?: HomeItem[]
  width?: '20%' | '25%' | '33.33%'
}

// memo浅层比较
const SectionRooms: FC<IProps> = function (props) {
  const { rooms, width } = props

  return (
    <div className="flex flex-wrap -mx-2">
      {rooms?.slice(0, 8).map((item: any) => {
        return <RoomItem itemData={item} width={width} key={item.id} />
      })}
    </div>
  )
}

export default SectionRooms

// 设置一个方便调试的name 可以不写 默认为组件名称
SectionRooms.displayName = 'SectionRooms'
