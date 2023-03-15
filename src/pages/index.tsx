import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData
} from '@/service/modules/home'
import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { RoomsType } from '@/service/modules/home.type'

export interface IProps {
  children?: ReactElement
  goodPriceInfo?: RoomsType // 高性价比房源
  highScoreInfo?: RoomsType // 高评分房源
  discountInfo?: any // 折扣后的房源
}

export default function Home(props: IProps) {
  const { goodPriceInfo, highScoreInfo, discountInfo } = props

  return (
    <>
      <main className="">
        {/* banner */}
        <div className=" bg-[url('~/src/assets/img/cover_01.jpeg')] bg-cover bg-black  h-[529px] "></div>

        {/* 内容 */}
        <div className="wrap">
          {/* 折扣的房源 */}
          <div className="mt-[30px]">
            <SectionHeader
              title={discountInfo?.title}
              subTitle={discountInfo?.subtitle}
            />
            <SectionRooms
              rooms={discountInfo?.dest_list['佛山']}
              width={'33%'}
            />
          </div>

          {/* 高性价比房源 */}
          <div className="mt-[30px]">
            <SectionHeader
              title={goodPriceInfo?.title}
              subTitle={goodPriceInfo?.subtitle}
            />
            <SectionRooms rooms={goodPriceInfo?.list} />
          </div>

          {/* 高评分房源 */}
          <div className="mt-[50px]">
            <SectionHeader
              title={highScoreInfo?.title}
              subTitle={highScoreInfo?.subtitle}
            />
            <SectionRooms rooms={highScoreInfo?.list} />
          </div>
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

  return {
    props: {
      goodPriceInfo: res1,
      highScoreInfo: res2,
      discountInfo: res3
    }
  }
}
