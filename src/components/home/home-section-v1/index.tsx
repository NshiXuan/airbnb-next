import { FC, useMemo } from 'react'
import { memo, useCallback, useState } from 'react'
import { DiscountOrHotHomeType, NamesType } from '@/service/modules/home.type'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

export interface IProps {
  homeSectionData?: any
}

// memo浅层比较
const HomeSectionV1: FC<IProps> = memo(function (props) {
  const { homeSectionData } = props
  console.log(homeSectionData?.data?.hotProduct, 'xlhomeSectionData')
  // 数据转换 获取tabNames传递给SectionTabs
  // const tabNames = homeSectionData?.map((item) => item)

  // console.log(tabNames, homeSectionData?.data?.content_list?.[25781],'xlhomeSectionData222')

  // 初始化tabs的名称 始终为数组的第一个值
  // useState只对第一个传入的值有效 后面传天王老子也没有用
  // 解决方法
  // 1.如果是在子组件中使用useState 给父组件一个判断useState的初始值存在在展示子组件
  // 2.也可以通过useEffect(()=>{},[initData]) 不过当initData变化时会造成组件多渲染一次
  const [name, setName] = useState<NamesType>(
    homeSectionData?.weather?.city_name as NamesType
  )
  // tab点击事件
  const discountTabClickHandle = useCallback(
    (index: number, name: NamesType) => {
      setName(name)
    },
    []
  )
  // const tabNames = useMemo(()=>{
  //   const aa = homeSectionData?.find((item) => item?.name === name)
  //   console.log(aa, 'xk888')
  // }, [name]) as any
  return (
    <div >
      <SectionHeader
        title={'热门推荐🔥'}
      />
      {/* 选项卡 */}
      {/* <SectionTabs tabNames={homeSectionData} tabClick={discountTabClickHandle} /> */}
      <SectionRooms rooms={homeSectionData} width={'33%'} source={0}/>
      <SectionHeader
        title={'今日上新🔥'}
      />
      {/* 选项卡 */}
      {/* <SectionTabs tabNames={homeSectionData} tabClick={discountTabClickHandle} /> */}
      <SectionRooms rooms={homeSectionData} width={'33%'} source={1}/>
      <SectionHeader
        title={'满减优惠💓'}
      />
      <SectionRooms rooms={homeSectionData} width={'33%'} source={2}/>
      <SectionHeader
        title={'折扣商品🔥'}
      />
      {/* 选项卡 */}
      {/* <SectionTabs tabNames={homeSectionData} tabClick={discountTabClickHandle} /> */}
      <SectionRooms rooms={homeSectionData} width={'33%'} source={3}/>
      <SectionHeader
        title={'送礼必备💓'}
      />
      {/* 选项卡 */}
      {/* <SectionTabs tabNames={homeSectionData} tabClick={discountTabClickHandle} /> */}
      <SectionRooms rooms={homeSectionData} width={'33%'} source={4}/>
    </div>
  )
})

export default HomeSectionV1

// 设置一个方便调试的name 可以不写 默认为组件名称
HomeSectionV1.displayName = 'HomeSectionV1'
