import { FC, useCallback, useState } from 'react'

import { DiscountOrHotHomeType, NamesType } from '@/service/modules/home.type'

import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

export interface IProps {
  homeSectionData?: DiscountOrHotHomeType
}

// memo浅层比较
const HomeSectionV1: FC<IProps> = function (props) {
  const { homeSectionData } = props
  // 数据转换 获取tabNames传递给SectionTabs
  const tabNames = homeSectionData?.dest_address.map((item) => item.name)

  // 初始化tabs的名称 始终为数组的第一个值
  const [name, setName] = useState<NamesType>(
    homeSectionData?.dest_address[0].name as NamesType
  )

  // tab点击事件
  const discountTabClickHandle = useCallback(
    (index: number, name: NamesType) => {
      // set会导致组件重新渲染
      setName(name)
    },
    []
  )

  return (
    <div className="mt-[50px]">
      <SectionHeader
        title={homeSectionData?.title}
        subTitle={homeSectionData?.subtitle}
      />
      {/* 选项卡 */}
      <SectionTabs tabNames={tabNames} tabClick={discountTabClickHandle} />
      <SectionRooms rooms={homeSectionData?.dest_list[name]} width={'33.33%'} />
      <SectionFooter name={name} />
    </div>
  )
}

export default HomeSectionV1

// 设置一个方便调试的name 可以不写 默认为组件名称
HomeSectionV1.displayName = 'HomeSectionV1'
