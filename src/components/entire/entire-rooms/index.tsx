import RoomItem from '@/components/room-item'
import { EntireHomeItem } from '@/service/modules/entire.type'
import { HomeItem } from '@/service/modules/home.type'
import { IDispatch } from '@/store'
import { changeDetailInfo } from '@/store/modules/detail'
import { useRouter } from 'next/router'
import { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'

export interface IProps {
  roomList?: HomeItem[] | EntireHomeItem[]
  totalCount?: number
}

const EntireRooms: FC<IProps> = function (props) {
  const { roomList, totalCount } = props

  const router = useRouter()
  const dispatch: IDispatch = useDispatch()
  const itemClickHandle = useCallback((item: EntireHomeItem) => {
    // 1.把item存储到store中
    dispatch(changeDetailInfo(item))

    console.log('EntireRooms')

    // 2.跳转到detail页面
    router.push('/detail')
  }, [])

  return (
    <div className="p-6">
      <h2 className=" font-bold text-[22px] text-[#222] ">
        共{totalCount}处住所
      </h2>
      <div className="flex flex-wrap -mx-2 ">
        {roomList?.map((item) => {
          return (
            <RoomItem
              key={item.id}
              itemData={item}
              width={'20%'}
              itemClick={itemClickHandle}
            />
          )
        })}
      </div>
    </div>
  )
}

export default EntireRooms

// 设置一个方便调试的name 可以不写 默认为组件名称
EntireRooms.displayName = 'EntireRooms'
