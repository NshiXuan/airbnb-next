import LongForItem from '@/components/longfor-item'
import ScrollView from '@/components/scroll-view'
import SectionHeader from '@/components/section-header'
import { LongForType } from '@/service/modules/home.type'
import type { FC } from 'react'

export interface IProps {
  infoData?: LongForType
}

const HomeLongFor: FC<IProps> = function (props) {
  const { infoData } = props

  return (
    <div className="mt-[50px]">
      <SectionHeader title={infoData?.title} subTitle={infoData?.subtitle} />
      <div className="flex -mx-2">
        <ScrollView>
          {infoData?.list.map((item) => {
            return <LongForItem itemData={item} />
          })}
        </ScrollView>
      </div>
    </div>
  )
}

export default HomeLongFor

// 设置一个方便调试的name 可以不写 默认为组件名称
HomeLongFor.displayName = 'HomeLongFor'
