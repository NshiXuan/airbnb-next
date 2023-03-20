import type { FC } from 'react'

export interface IProps {}

const Entire: FC<IProps> = function (props) {
  return (
    <div className="wrap">
      <div>标签选择</div>
      <div>房屋</div>
      <div>分页</div>
    </div>
  )
}

export default Entire

// 设置一个方便调试的name 可以不写 默认为组件名称
Entire.displayName = 'Entire'
