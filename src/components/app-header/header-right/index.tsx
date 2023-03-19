import React, { useEffect, useState } from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

// SVG
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

// 引入样式 import导入需要有module.scss后缀
import style from './style.module.scss'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const HeaderRight: FC<IProps> = memo(function (props) {
  // 1.定义展示隐藏面板的变量
  const [showPanel, setShowPanel] = useState(false)

  // 2.展示面板的方法
  function profileClickHandle() {
    setShowPanel(true)
  }

  // 3.副作用代码 隐藏面板
  useEffect(() => {
    // 关闭面板方法
    function windowHandleClick() {
      setShowPanel(false)
    }

    // 监听整个window的click事件 true代表捕获 不要冒泡
    window.addEventListener('click', windowHandleClick, true)

    // 取消监听window的click事件
    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  return (
    <div className="flex-1 flex justify-end items-center text-font-primary-color">
      <div className="flex h-[18px] text-[14px] font-[600]">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      {/* 个人中心 */}
      <div
        className=" relative flex mr-6 items-center w-[77px] h-[42px] justify-evenly box-border border rounded-[25px] cursor-pointer boxShadow"
        onClick={profileClickHandle}
      >
        {/* 登录icon */}
        {/* <div onClick={profileClickHandle}> */}
        <IconMenu />
        <IconAvatar />
        {/* </div> */}

        {/* 登录面板 */}
        {showPanel && (
          <div className=" absolute top-16 right-0 w-[240px]  bg-white rounded-lg shadow-md ">
            <div className="border-b border-b-[#eee] py-[10px] ">
              <div className={style.item}>注册</div>
              <div className={style.item}>登录</div>
            </div>

            <div className="py-[10px]">
              <div className={style.item}>客服中心</div>
              <div className={style.item}>帮助</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})

export default HeaderRight

// 设置一个方便调试的name 可以不写 默认为组件名称
HeaderRight.displayName = 'HeaderRight'
