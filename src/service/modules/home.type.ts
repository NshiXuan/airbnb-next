// getHomeGoodPriceData返回的数据类型
export interface RoomsType {
  _id: string
  type: string
  title: string
  subtitle: string
  list: HomeItem[]
}

export interface HomeItem {
  _id: string
  id: string
  picture_url: string
  picture_urls: string[]
  verify_info: VerifyInfo
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  reviews: Review[]
  bottom_info: BottomInfo
  lat: number
  lng: number
  image_url: string
}

export interface VerifyInfo {
  messages: string[]
  text_color: string
}

export interface Review {
  comments: string
  created_at: string
  is_translated: boolean
  localized_date: string
  reviewer_image_url: string
  review_id: string
}

export interface BottomInfo {
  content: string
  content_color: string
  font_size: string
  visibility: string
}

// 折扣、热门推荐数据的类型
export interface DiscountOrHotHomeType {
  _id: string
  type: string
  title: string
  subtitle: string
  dest_address: DestAddress[]
  dest_list: DestList
}

export interface DestAddress {
  name: string
  homes: string[]
}

export interface DestList {
  佛山: HomeItem[]
  成都: HomeItem[]
  广州: HomeItem[]
  重庆: HomeItem[]
  长沙: HomeItem[]
  杭州: HomeItem[]
  西安: HomeItem[]
  深圳: HomeItem[]
}

export type NamesType =
  | '佛山'
  | '成都'
  | '广州'
  | '重庆'
  | '长沙'
  | '杭州'
  | '西安'
  | '深圳'

// 向往城市数据类型
export interface LongForType {
  _id: string
  title: string
  subtitle: string
  type: string
  list: LongItemType[]
}

export interface LongItemType {
  city: string
  price: string
  picture_url: string
  image_url: string
}
