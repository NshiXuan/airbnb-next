import SearchTitles from '@/assets/data/search_titles.json'
import { FC, useState } from 'react'
import { memo } from 'react'
import SearchTabs from './search-tabs'
import SearchSections from './search-sections'
import IconSearchBar from '@/assets/svg/icon-search-bar'

export interface IProps {
  isSearch?: boolean
  searchBarClick?: () => void
}

// memo浅层比较
const HeaderCenter: FC<IProps> = memo(function (props) {
  const { isSearch, searchBarClick } = props

  const titles = SearchTitles.map((item) => item.title)

  const [tabIndex, setTabIndex] = useState(0)

  function handleSearchBarClick() {
    searchBarClick && searchBarClick()
  }

  return (
    <div>
      {!isSearch ? (
        <div
          className="flex justify-between items-center w-[300px] h-12 p-2 box-border border rounded-3xl cursor-pointer boxShadow"
          onClick={handleSearchBarClick}
        >
          <div className="px-4 text-font-secondary-color font-[600]">
            搜索房源和体验
          </div>

          <div className="flex items-center justify-center w-8 h-8 text-[#eee]  rounded-full bg-primary-color">
            <IconSearchBar />
          </div>
        </div>
      ) : (
        <div className="relative">
          <SearchTabs titles={titles} tabClick={setTabIndex}></SearchTabs>
          <div className=" absolute top-[60px] left-1/2 -translate-x-1/2 border px-8 py-4 rounded-full ">
            <SearchSections searchInfo={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      )}
    </div>
  )
})

export default HeaderCenter

// 设置一个方便调试的name 可以不写 默认为组件名称
HeaderCenter.displayName = 'HeaderCenter'
