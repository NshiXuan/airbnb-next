import { EntireHomeItem } from "@/service/modules/entire.type";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface IDetail {
  detailInfo?: EntireHomeItem | null
}

const initialState: IDetail = {
  detailInfo: null
}

// 1.创建slice
const DetailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    changeDetailInfo(state, { payload }) {
      state.detailInfo = payload
    }
  },

  // 2.使用next-redux-wrapper中的HYDRATE同步客户端、服务端数据
  extraReducers: (builder) => {
    // HYDRATE水合操作 保证服务端 客户端数据的一致性
    builder.addCase(HYDRATE, (state, action: any) => {
      // state拿到的是initialState
      // action.payload拿到的是rootState
      return {
        ...state,
        ...action.payload.home
      }
    })
  }
})

// 把Action导出
export const { changeDetailInfo } = DetailSlice.actions
export default DetailSlice.reducer
