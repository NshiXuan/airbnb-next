// import sxRequest, { IResultData } from '../index'
import sxRequest from '../fetch'
import { RoomsType } from './home.type'

// 请求高性价比房源数据
export const getHomeGoodPriceData = () => {
  return sxRequest.get<RoomsType>('/home/goodprice')
}

// 请求高评分房源
export const getHomeHighScoreData = () => {
  return sxRequest.get<RoomsType>('/home/highscore')
}

// 获取折扣后的数据
export const getHomeDiscountData = () => {
  return sxRequest.get<any>('/home/discount')
}
