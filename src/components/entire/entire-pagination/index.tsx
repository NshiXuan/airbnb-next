import { getEntireRoomList } from '@/service/modules/entire'
import Pagination from '@mui/material/Pagination'
import type { FC } from 'react'

export interface IProps {
  totalCount?: number
}

const EntirePagination: FC<IProps> = function (props) {
  const { totalCount } = props

  // 计算页面总数
  const pageCount = totalCount! / 20

  function pageChangeHandle(event: any, newPage: number) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    console.log(newPage)
    getEntireRoomList(newPage - 1)
  }

  return (
    <div className="flex items-center justify-center">
      <Pagination count={pageCount} onChange={pageChangeHandle} />
    </div>
  )
}

export default EntirePagination

// 设置一个方便调试的name 可以不写 默认为组件名称
EntirePagination.displayName = 'EntirePagination'
