import DetailInfo from '@/components/detail/detail-info'
import DetailPicture from '@/components/detail/detail-picture'
import { EntireHomeItem } from '@/service/modules/entire.type'
import { IRootState } from '@/store'
import type { FC } from 'react'
import { memo } from 'react'
import { useSelector } from 'react-redux'

export interface IProps {
  detailInfo?: EntireHomeItem
}

const Detail: FC<IProps> = memo(function (props) {
  const { detailInfo } = useSelector((state: IRootState) => state.detail)

  return (
    <div>
      <DetailPicture pictureUrls={detailInfo?.picture_urls} />
      <DetailInfo />
    </div>
  )
})

export default Detail

// 设置一个方便调试的name 可以不写 默认为组件名称
Detail.displayName = 'Detail'
