import { GetServerSideProps } from 'next'

import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData
} from '@/service/modules/home'

import HomeLongFor from '@/components/home/home-longfor'
import HomeSectionV1 from '@/components/home/home-section-v1'
import HomeSectionV2 from '@/components/home/home-section-v2'
import HomeSectionV3 from '@/components/home/home-section-v3'
import {
  DiscountOrHotHomeType,
  LongForType,
  RoomsType
} from '@/service/modules/home.type'
import { useDispatch } from 'react-redux'
import { IDispatch } from '@/store'
import { useEffect } from 'react'
import { changeHeaderConfigAction } from '@/store/modules/main'

export interface IProps {
  goodPriceInfo?: RoomsType // 高性价比房源
  highScoreInfo?: RoomsType // 高评分房源
  discountInfo?: DiscountOrHotHomeType // 折扣后的房源
  hotInfo?: DiscountOrHotHomeType // 热门推荐的房源
  longforInfo?: LongForType // 向往城市
  plusInfo?: RoomsType // plus房源
}

export default function Home(props: IProps) {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotInfo,
    longforInfo,
    plusInfo
  } = props

  const dispatch: IDispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true }))
  }, [])

  return (
    <>
      <main>
        {/* banner */}
        <div className=" bg-[url('~/src/assets/img/cover_01.jpeg')] bg-cover bg-black  h-[529px] "></div>

        {/* 内容 */}
        <div className="wrap">
          {/* 折扣的房源 */}
          <HomeSectionV1 homeSectionData={discountInfo} />

          {/* 热门推荐的房源 */}
          <HomeSectionV1 homeSectionData={hotInfo} />

          {/* 向往的城市 */}
          <HomeLongFor infoData={longforInfo} />

          {/* 高性价比房源 */}
          <HomeSectionV2 homeSectionData={goodPriceInfo} />

          {/* 高评分房源 */}
          <HomeSectionV2 homeSectionData={highScoreInfo} />

          {/* Plus房源 */}
          <HomeSectionV3 homeSectionData={plusInfo} />
        </div>
      </main>
    </>
  )
}

// 获取服务器端数据直接赋值给props进行SSR渲染
export const getServerSideProps: GetServerSideProps = async (context) => {
  // 获取高性价房源
  const res1 = await getHomeGoodPriceData()

  // 获取高评分房源
  const res2 = await getHomeHighScoreData()

  // 获取折扣后的房源
  const res3 = await getHomeDiscountData()

  // 获取热门推荐房源
  const res4 = await getHomeHotRecommendData()

  // 获取向往城市
  const res5 = await getHomeLongforData()

  // 获取plus房源
  const res6 = await getHomePlusData()

  return {
    props: {
      goodPriceInfo: res1,
      highScoreInfo: res2,
      discountInfo: res3,
      hotInfo: res4,
      longforInfo: res5,
      plusInfo: res6
    }
  }
}
