import RoomItem from '@/components/room-item'
import ScrollView from '@/components/scroll-view'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import { RoomsType } from '@/service/modules/home.type'
import type { FC } from 'react'

export interface IProps {
  homeSectionData?: RoomsType
}

const HomeSectionV3: FC<IProps> = function (props) {
  const { homeSectionData } = props

  return (
    <div className="mt-[50px]">
      <SectionHeader
        title={homeSectionData?.title}
        subTitle={homeSectionData?.subtitle}
      />
      <div className="-mx-2">
        <ScrollView>
          {homeSectionData?.list.map((item) => {
            return (
              <RoomItem itemData={item} width={'20%'} key={item.image_url} />
            )
          })}
        </ScrollView>
      </div>
      <SectionFooter name={homeSectionData?.type} />
    </div>
  )
}

export default HomeSectionV3

// 设置一个方便调试的name 可以不写 默认为组件名称
HomeSectionV3.displayName = 'HomeSectionV3'
