import { HomeItem } from '@/service/modules/home.type'
import type { FC } from 'react'
import Image from 'next/image'

import { EntireHomeItem } from '@/service/modules/entire.type'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'

export interface IProps {
  itemData: EntireHomeItem | HomeItem
  width?: '20%' | '25%' | '33.33%' // 展示的宽度
}

// memo浅层比较
const RoomItem: FC<IProps> = function (props) {
  const { itemData, width = '25%' } = props

  return (
    <div className=" px-2 mt-5 flex-shrink-0 " style={{ width: width }}>
      {/* 图片 */}
      <div
        className="relative"
        style={!itemData.picture_urls ? { paddingTop: '66%' } : {}}
      >
        {itemData.picture_urls ? (
          // 首页展示的Item图片
          <Carousel autoplay>
            {itemData.picture_urls.map((item) => {
              return (
                <div key={item}>
                  <img
                    className=" bottom-0 h-[200px] w-[100%] object-cover rounded-md "
                    src={item}
                  />
                </div>
              )
            })}
          </Carousel>
        ) : (
          // 如果是查看全部页面展示轮播图图片
          <Image
            className="rounded-md object-cover"
            src={itemData.picture_url}
            alt={itemData.name}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        )}
      </div>

      {/* 描述 */}
      <div className="text-[#39576a] text-[12px] mt-[10px] mb-[5px] font-bold ">
        {itemData.verify_info.messages.join(' · ')}
      </div>

      {/* 名称 价格 */}
      <div className="font-bold line-clamp-2">{itemData.name}</div>
      <div className="text-[12px] mt-2 ">￥{itemData.price}/晚</div>

      {/* 评分 */}
      {/*
        precision 可以第只要有0.1的不同就会展示在star上 不然默认每个star都是满的 不会与半星这种
        sx可以自定义Rating的样式
      */}
      <div className="text-[12px] flex items-center mt-1">
        <Rating
          name="half-rating-read"
          defaultValue={itemData.star_rating}
          precision={0.1}
          readOnly
          sx={{ fontSize: '12px', color: '#00848A' }}
        />
        <span className=" px-1">{itemData.reviews_count}</span>
        {itemData?.bottom_info?.content && (
          <span>{itemData?.bottom_info?.content}</span>
        )}
      </div>
    </div>
  )
}

export default RoomItem

// 设置一个方便调试的name 可以不写 默认为组件名称
RoomItem.displayName = 'RoomItem'
