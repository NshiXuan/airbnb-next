import { GetServerSideProps } from 'next'

import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData
} from '@/service/modules/home'

import HomeSectionV1 from '@/components/home/home-section-v1'
import HomeSectionV2 from '@/components/home/home-section-v2'
import { DiscountOrHotHomeType, RoomsType } from '@/service/modules/home.type'

export interface IProps {
  goodPriceInfo?: RoomsType // 高性价比房源
  highScoreInfo?: RoomsType // 高评分房源
  discountInfo?: DiscountOrHotHomeType // 折扣后的房源
  hotInfo?: DiscountOrHotHomeType // 热门推荐的房源
}

export default function Home(props: IProps) {
  const { goodPriceInfo, highScoreInfo, discountInfo, hotInfo } = props

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

          {/* 高性价比房源 */}
          <HomeSectionV2 homeSectionData={goodPriceInfo} />

          {/* 高评分房源 */}
          <HomeSectionV2 homeSectionData={highScoreInfo} />
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

  return {
    props: {
      goodPriceInfo: res1,
      highScoreInfo: res2,
      discountInfo: res3,
      hotInfo: res4
    }
  }
}
