import React from "react"
import { memo, ReactElement } from "react"
import type { FC } from "react"

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const Entire: FC<IProps> = memo(function (props) {
  // const { children } = props

  return (
    <div>
      <h2>Entire</h2>
    </div>
  )
})

export default Entire

// 设置一个方便调试的name 可以不写 默认为组件名称
Entire.displayName = "Entire"