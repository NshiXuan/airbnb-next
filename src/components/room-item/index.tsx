import React from 'react'
import { memo } from 'react'
import type { FC } from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'

export interface IProps {
  itemData: any
  width?: '20%' | '25%' | '33%' // 展示的宽度
  source: number;
}

// memo浅层比较
const RoomItem: FC<IProps> = memo(function (props) {
  const { itemData, width = '25%', source } = props
  console.log(itemData, 'xlxlitemData,')

  return (
    <div className=" px-2 mt-5 " style={{ width: width }}>
      {/* 图片 */}
      <div className="relative pt-2">
        {/* Image默认有绝对定位 */}
        <Image
          className="rounded-md transform cursor-pointer rounded-b-xl shadow-xl duration-500 hover:-translate-y-2"
          src={itemData?.products?.picUrls?.[source]}
          alt={itemData?.products?.picUrls?.[source]}
          unoptimized
          priority
          width="263"
          height="263"
        />
      </div>

      <div className="text-[#39576a] text-[12px] mt-[20px] pb-[5px] font-bold w-72 ">
        {itemData?.name}
      </div>
      <div className="font-bold line-clamp-2">¥{itemData?.products?.originalCost}</div>
      {/* <span className=" px-1">{itemData?.products?.label}</span> */}
      {/* <div className="text-[12px] mt-2 ">{itemData?.products?.couponLabelDesc}</div> */}
      {/*
        precision 可以第只要有0.1的不同就会展示在star上 不然默认每个star都是满的 不会与半星这种
        sx可以自定义Rating的样式
      */}
      <div className="text-[12px] flex items-center mt-1">
        <Rating
          name="half-rating-read"
          defaultValue={Math.random() > 0.5 ? 3: 5}
          precision={0.1}
          readOnly
          sx={{ fontSize: '12px', color: 'pink' }}
        />
      </div>
    </div>
  )
})

export default RoomItem

// 设置一个方便调试的name 可以不写 默认为组件名称
RoomItem.displayName = 'RoomItem'
