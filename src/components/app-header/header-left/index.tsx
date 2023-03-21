import IconLogo from '@/assets/svg/icon_logo'
import { useRouter } from 'next/router'
import type { FC } from 'react'

export interface IProps {}

const HeaderLeft: FC<IProps> = function (props) {
  const router = useRouter()
  function goHome() {
    router.push('/')
  }

  return (
    <div className="flex-1 flex text-primary-color  ml-5">
      <div className="cursor-pointer" onClick={goHome}>
        <IconLogo />
      </div>
    </div>
  )
}

export default HeaderLeft

// 设置一个方便调试的name 可以不写 默认为组件名称
HeaderLeft.displayName = 'HeaderLeft'
