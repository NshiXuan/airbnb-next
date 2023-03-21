import sxRequest from '../fetch'

// 请求高性价比房源数据
export const getEntireRoomList = (offset: number = 0, size: number = 20) => {
  return sxRequest.get<any>(`/entire/list?offset=${offset}&size=${size}`)
}
