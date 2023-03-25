import EntireFilter from '@/components/entire/entire-filter'
import EntirePagination from '@/components/entire/entire-pagination'
import EntireRooms from '@/components/entire/entire-rooms'
import { getEntireRoomList } from '@/service/modules/entire'
import { GetServerSideProps } from 'next'
import { FC } from 'react'

import tabList from '@/assets/data/filter_data.json'
import { EntireType } from '@/service/modules/entire.type'
import wrapper from '@/store'

export interface IProps {
  entireData?: EntireType
}

const Entire: FC<IProps> = function (props) {
  const { entireData } = props

  return (
    <div className="">
      <EntireFilter tabList={tabList} />
      <EntireRooms
        roomList={entireData?.list}
        totalCount={entireData?.totalCount}
      />
      <EntirePagination totalCount={entireData?.totalCount} />
    </div>
  )
}

export default Entire

// 设置一个方便调试的name 可以不写 默认为组件名称
Entire.displayName = 'Entire'

// 获取服务器端数据直接赋值给props进行SSR渲染
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(function (store) {
    return async (context: any) => {
      const res = await getEntireRoomList()

      return {
        props: {
          entireData: res
        }
      }
    }
  })
