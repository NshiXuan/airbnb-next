// import sxRequest, { IResultData } from '../index'
import sxRequest from '../fetch'
import { DiscountOrHotHomeType, LongForType, RoomsType } from './home.type'

// 请求高性价比房源数据
export const getHomeGoodPriceData = () => {
  return sxRequest.get<RoomsType>('/home/goodprice')
}

// 请求高评分房源
export const getHomeHighScoreData = () => {
  return sxRequest.get<RoomsType>('/home/highscore')
}

// 获取折扣后的房源
export const getHomeDiscountData = () => {
  return sxRequest.get<DiscountOrHotHomeType>('/home/discount')
}

// 热门推荐房源
export const getHomeHotRecommendData = () => {
  return sxRequest.get<DiscountOrHotHomeType>('/home/hotrecommenddest')
}

// 获取向往城市
export const getHomeLongforData = () => {
  return sxRequest.get<LongForType>('/home/longfor')
}
