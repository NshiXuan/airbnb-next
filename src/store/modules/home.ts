import { getHomeGoodPriceData } from "@/service/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface IHome {
  goodPriceInfo: any
}

const initialState: IHome = {
  goodPriceInfo: {}
}

// 1.创建slice
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
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
    }).addCase(fetchHomeDateAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })
  }
})

// 3.封装请求的异步Action并导出
export const fetchHomeDateAction = createAsyncThunk('fetchdata', async () => {
  const res = await getHomeGoodPriceData()
  // console.log(res)
  return res
})

// 把Action导出
export const { changeGoodPriceInfoAction } = homeSlice.actions
export default homeSlice.reducer
