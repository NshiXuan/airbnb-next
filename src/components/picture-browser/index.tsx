import { FC, useState } from 'react'
import { useEffect } from 'react'

import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import Indicator from '../indicator'

export interface IProps {
  pictureUrls?: string[] // 图片数组
  closeClick: (e: any) => void // 关闭图片
}

const PictrueBrowser: FC<IProps> = function (props) {
  const { pictureUrls, closeClick } = props

  // 记录当前浏览的图片
  const [currentIndex, setCurrentIndex] = useState(0)

  // 当图片展示出来 让滚动功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      // 关闭图片浏览后 恢复默认
      document.body.style.overflow = 'auto'
    }
  }, [])

  // 点击控制器切换图片
  function controlClickHandle(isNext: boolean) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls?.length! - 1
    if (newIndex > pictureUrls?.length! - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }

  return (
    <div className="fixed z-[999] left-0 right-0 bottom-0 top-0 bg-[#333] flex flex-col ">
      {/* 关闭按钮 设为层级最高 */}
      <div className=" relative h-[86px] ">
        <div
          className=" absolute z-[9999] top-[15px] right-[25px] cursor-pointer"
          onClick={closeClick}
        >
          <IconClose />
        </div>
      </div>

      {/* 图片展示 */}
      <div className=" relative flex-1 flex items-center px-[10px]">
        {/* 控制器 设为层级第二高 */}
        <div className="absolute z-10 top-0 left-0 right-0 bottom-0 flex items-center justify-between w-[100%] text-white ">
          <div
            className=" cursor-pointer"
            onClick={(e) => controlClickHandle(false)}
          >
            <IconArrowLeft width={77} height={77} />
          </div>
          <div
            className=" cursor-pointer"
            onClick={(e) => controlClickHandle(true)}
          >
            <IconArrowRight width={77} height={77} />
          </div>
        </div>

        {/* 图片 */}
        <div className="relative flex h-[100%] overflow-hidden w-[100%]  ">
          {/* 可以用react-transition-group库来实现切换动画 */}
          <img
            className=" absolute top-0 left-0 right-0 mx-auto h-[100%] max-w-[105vh] select-none "
            src={pictureUrls?.[currentIndex]}
            alt=""
          />
        </div>
      </div>

      {/* 指示器 */}
      <div className="flex justify-center h-[100px] my-[20px] ">
        <div className=" b-[10px] max-w-[105vh] text-white ">
          {/* 描述 */}
          <div className="flex justify-between  ">
            <div>
              <span>
                {currentIndex + 1}/{pictureUrls?.length}
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="flex items-center cursor-pointer ">
              <span>隐藏图片列表</span>
              <IconTriangleBottom />
            </div>
          </div>

          {/* 图片列表 */}
          <div className="mt-2">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls?.map((item, index) => {
                return (
                  <div
                    className="mr-[15px] cursor-pointer"
                    key={item}
                    onClick={(e) => setCurrentIndex(index)}
                  >
                    <img
                      className="h-[67px] opacity-50"
                      src={item}
                      alt=""
                      style={currentIndex == index ? { opacity: '1' } : {}}
                    />
                  </div>
                )
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PictrueBrowser

// 设置一个方便调试的name 可以不写 默认为组件名称
PictrueBrowser.displayName = 'PictrueBrowser'
