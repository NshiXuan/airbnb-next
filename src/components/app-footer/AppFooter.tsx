import React from 'react'
import { memo, ReactElement } from 'react'
import type { FC } from 'react'

import footerData from '@/assets/data/footer.json'

export interface IProps {
  children?: ReactElement
}

// memo浅层比较
const AppFooter: FC<IProps> = memo(function (props) {
  // const { children } = props

  return (
    <div className="mt-[100px] border-t">
      <div className="wrap py-12 px-6 ">
        {/* footer的每一项 */}
        <div className="flex justify-around ">
          {footerData.map((item) => {
            return (
              <div key={item.name}>
                <div className="font-black mb-4">{item.name}</div>
                <div>
                  {item.list.map((iten) => {
                    return (
                      <div
                        className="mt-[10px] text-[#767676] cursor-pointer hover:underline"
                        key={iten}
                      >
                        {iten}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* 声明 */}
        <div className=" text-center p-5 mt-[30px] text-[#767676] border-t">
          © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
          全国旅游投诉渠道 12301
        </div>
      </div>
    </div>
  )
})

export default AppFooter

// 设置一个方便调试的name 可以不写 默认为组件名称
AppFooter.displayName = 'AppFooter'
