import PictrueBrowser from '@/components/picture-browser'
import type { FC } from 'react'
import { useState } from 'react'
import style from './index.module.scss'

export interface IProps {
  pictureUrls?: string[]
}

const DetailPicture: FC<IProps> = function (props) {
  const { pictureUrls } = props

  // 定义是否展示图片浏览 PictrueBrowser
  const [showBrowser, setShowBrowser] = useState(false)

  // 点击图片展示图片浏览
  function showBrowserHandle() {
    setShowBrowser(true)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.top}>
        <div className={style.left}>
          <div className={style.item} onClick={showBrowserHandle}>
            <img src={pictureUrls?.[0]} alt="" />
            <div className={style.cover}></div>
          </div>
        </div>

        <div className={style.right}>
          {pictureUrls?.slice(1, 5).map((item, index) => {
            return (
              <div
                className={style.item}
                key={item}
                onClick={showBrowserHandle}
              >
                <img src={item} alt="" />
                <div className={style.cover}></div>
              </div>
            )
          })}
        </div>
      </div>

      <div className={style.showBtn} onClick={showBrowserHandle}>
        查看照片
      </div>

      {/* 预览图片 */}
      {showBrowser && (
        <PictrueBrowser
          pictureUrls={pictureUrls}
          closeClick={(e) => setShowBrowser(false)}
        />
      )}
    </div>
  )
}

export default DetailPicture

// 设置一个方便调试的name 可以不写 默认为组件名称
DetailPicture.displayName = 'DetailPicture'
