// getHomeGoodPriceData返回的数据类型
export interface RoomsType {
  _id: string
  type: string
  title: string
  subtitle: string
  list: HomeGoodPriceItem[]
}

export interface HomeGoodPriceItem {
  id: string
  picture_url: string
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
