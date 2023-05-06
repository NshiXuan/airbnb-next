import { HomeItem } from '@/service/modules/home.type'
import { FC } from 'react'
import RoomItem from '../room-item'
import { IDispatch } from '@/store'
import { useDispatch } from 'react-redux'
import { changeDetailInfo } from '@/store/modules/detail'
import { useRouter } from 'next/router'

export interface IProps {
  rooms?: HomeItem[]
  width?: '20%' | '25%' | '33.33%'
}

const SectionRooms: FC<IProps> = function (props) {
  const { rooms, width } = props

  // 获取dispatch
  const dispatch: IDispatch = useDispatch()

  // 获取router进行跳转
  const router = useRouter()

  function handleItemClick(item: any) {
    console.log("🚀 ~ file: index.tsx:20 ~ handleItemClick ~ item:", item)
    dispatch(changeDetailInfo(item))
    router.push('/detail')
  }

  return (
    <div className="flex flex-wrap -mx-2">
      {rooms?.slice(0, 8).map((item: any) => {
        return <RoomItem itemClick={handleItemClick} itemData={item} width={width} key={item.id} />
      })}
    </div>
  )
}

export default SectionRooms

// 设置一个方便调试的name 可以不写 默认为组件名称
SectionRooms.displayName = 'SectionRooms'
