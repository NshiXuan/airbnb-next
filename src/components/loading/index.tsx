import React from 'react'
import type { FC } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { IRootState } from '@/store'

const Loading: FC = function (props) {
  const { showLoading } = useSelector(
    (state: IRootState) => state.loading,
    shallowEqual
  )

  return (
    // 255 255 255 白色蒙层 0 0 0 黑色蒙层
    <div>
      {showLoading && (
        <div className="fixed left-0 right-0 top-0 bottom-0 z-50 bg-[rgba(255,255,255,.8)]  "></div>
      )}
    </div>
  )
}

export default Loading

// 设置一个方便调试的name 可以不写 默认为组件名称
Loading.displayName = 'Loading'
