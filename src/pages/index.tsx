import { GetServerSideProps } from 'next'
import { ReactElement, useCallback, useState } from 'react'

import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData
} from '@/service/modules/home'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import {
  DiscountOrHotHomeType,
  NamesType,
  RoomsType
} from '@/service/modules/home.type'

export interface IProps {
  children?: ReactElement
  goodPriceInfo?: RoomsType // 高性价比房源
  highScoreInfo?: RoomsType // 高评分房源
  discountInfo?: DiscountOrHotHomeType // 折扣后的房源
  hotInfo?: DiscountOrHotHomeType // 热门推荐的房源
}

export default function Home(props: IProps) {
  const { goodPriceInfo, highScoreInfo, discountInfo, hotInfo } = props

  // 数据转换 获取tabNames传递给SectionTabs
  const tabNames = discountInfo?.dest_address.map((item) => item.name)
  const hotTabNames = hotInfo?.dest_address.map((item) => item.name)

  // 初始化tabs的名称 始终为数组的第一个值
  // useState只对第一个传入的值有效 后面传天王老子也没有用
  // 解决方法
  // 1.如果是在子组件中使用useState 给父组件一个判断useState的初始值存在在展示子组件
  // 2.也可以通过useEffect(()=>{},[initData]) 不过当initData变化时会造成组件多渲染一次
  const [discountName, setDiscountName] = useState<NamesType>(
    discountInfo?.dest_address[0].name as NamesType
  )

  const [hotName, setHotName] = useState<NamesType>(
    hotInfo?.dest_address[0].name as NamesType
  )

  // tab点击事件
  // 没次Home组件重新渲染 就会定义一个新的tabClickHandle方法 导致使用的子组件会重新渲染
  // 我们可以使用useCallback来优化这个问题
  const discountTabClickHandle = useCallback(
    (index: number, name: NamesType) => {
      setDiscountName(name)
    },
    []
  )

  const hotTabClickHandle = useCallback((index: number, name: NamesType) => {
    setHotName(name)
  }, [])

  return (
    <>
      <main>
        {/* banner */}
        <div className=" bg-[url('~/src/assets/img/cover_01.jpeg')] bg-cover bg-black  h-[529px] "></div>

        {/* 内容 */}
        <div className="wrap">
          {/* 热门推荐的房源 */}
          <div className="mt-[30px]">
            <SectionHeader
              title={hotInfo?.title}
              subTitle={hotInfo?.subtitle}
            />
            {/* 选项卡 */}
            <SectionTabs tabNames={hotTabNames} tabClick={hotTabClickHandle} />
            <SectionRooms rooms={hotInfo?.dest_list[hotName]} width={'33%'} />
          </div>

          {/* 折扣的房源 */}
          <div className="mt-[30px]">
            <SectionHeader
              title={discountInfo?.title}
              subTitle={discountInfo?.subtitle}
            />
            {/* 选项卡 */}
            <SectionTabs
              tabNames={tabNames}
              tabClick={discountTabClickHandle}
            />
            <SectionRooms
              rooms={discountInfo?.dest_list[discountName]}
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
