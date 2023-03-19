import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'
import { RoomsType } from '@/service/modules/home.type'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

export interface IProps {
  homeSectionData?: RoomsType
}

// memo浅层比较
const HomeSectionV2: FC<IProps> = memo(function (props) {
  const { homeSectionData } = props

  return (
    <div className="mt-[50px]">
      <SectionHeader
        title={homeSectionData?.title}
        subTitle={homeSectionData?.subtitle}
      />
      <SectionRooms rooms={homeSectionData?.list} />
      {/* <SectionFooter /> */}
    </div>
  )
})

export default HomeSectionV2

// 设置一个方便调试的name 可以不写 默认为组件名称
HomeSectionV2.displayName = 'HomeSectionV2'
