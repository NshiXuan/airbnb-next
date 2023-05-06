import { HomeItem } from '@/service/modules/home.type'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { EntireHomeItem } from '@/service/modules/entire.type'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import Indicator from '../indicator'
import style from './index.module.scss'

export interface IProps {
  itemData: EntireHomeItem | HomeItem
  width?: '20%' | '25%' | '33.33%' // 展示的宽度
  itemClick?: (item: EntireHomeItem) => void
}

// memo浅层比较
const RoomItem: FC<IProps> = function (props) {
  const { itemData, width = '25%', itemClick } = props

  // 定义dots的索引
  const [selectIndex, setSelectIndex] = useState(0)

  // 点击箭头切换图片
  // 1.获取轮播图的Ref
  const carouselRef = useRef<CarouselRef>(null)
  function controlClickHandle(isNext: boolean, event: any) {
    isNext ? carouselRef.current?.next() : carouselRef.current?.prev()

    // 1.如果点击下一个 index+1 上一个-1
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    // 2.如果小于0 index设为最后一个
    const len = itemData.picture_urls.length
    if (newIndex < 0) newIndex = len - 1
    // 3.如果大于最后一个 index设为第一个
    if (newIndex > len - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 4.阻止事件冒泡
    event.stopPropagation()
  }

  function itemClickHandle() {
    itemClick && itemClick(itemData as EntireHomeItem)
  }

  // home页面展示的图片
  const imgElement = (
    <Image
      className="rounded-md object-cover transition duration-500 transform hover:scale-110 cursor-pointer "
      src={itemData.picture_url}
      alt={itemData.name}
      fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
  )

  // 更多页面展示的轮播图
  const swiperElement = (
    <div className={style.swiper}>
      {/* 滚动箭头 */}
      <div className={style.control}>
        <div
          className={style.left}
          onClick={(e) => controlClickHandle(false, e)}
        >
          <IconArrowLeft width={20} height={20} />
        </div>
        <div
          className={style.right}
          onClick={(e) => controlClickHandle(true, e)}
        >
          <IconArrowRight width={20} height={20} />
        </div>
      </div>

      {/* 轮播图 */}
      <Carousel dots={false} ref={carouselRef}>
        {itemData.picture_urls?.map((item) => {
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

      {/* dots */}
      <div className=" absolute z-[100] bottom-2 left-0 right-0 mx-auto w-[40%] ">
        <Indicator selectIndex={selectIndex}>
          {itemData.picture_urls?.map((item, index) => {
            return (
              <div
                className="flex justify-center items-center w-[14.28%]"
                key={item}
              >
                <span
                  className="w-[6px] h-[6px] bg-white rounded-full"
                  style={
                    selectIndex == index
                      ? {
                          width: '8px',
                          height: '8px',
                          background: '#00848A'
                        }
                      : {}
                  }
                ></span>
              </div>
            )
          })}
        </Indicator>
      </div>
    </div>
  )

  return (
    <div
      className=" px-2 mt-5 flex-shrink-0 "
      style={{ width: width }}
      onClick={itemClickHandle}
    >
      {/* 图片 */}
      <div
        className="relative overflow-hidden "
        style={!itemData.picture_urls ? { paddingTop: '66%' } : {}}
      >
        {itemData.picture_urls ? swiperElement : imgElement}
      </div>

      {/* 描述 */}
      <div className="text-[#39576a] text-[12px] mt-[10px] mb-[5px] font-bold ">
        {itemData.verify_info.messages.join(' · ')}
      </div>

      {/* 名称 价格 */}
      <div className="font-bold line-clamp-2 cursor-pointer">
        {itemData.name}
      </div>
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
