
export interface EntireType {
  list: EntireHomeItem[]
  errcode: number
  totalCount: number
}

export interface EntireHomeItem {
  _id: string
  id: string
  picture_url: string
  picture_urls: string[]
  verify_info: VerifyInfo
  name: string
  price: number
  price_format: string
  star_rating?: number
  star_rating_color: string
  reviews_count: number
  reviews?: Review[]
  bottom_info: any
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
  review_id: number
}

