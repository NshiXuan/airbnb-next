import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

export interface IMain {
  headerConfig?: HeaderConfigType
}

export type HeaderConfigType = { isFixed: boolean }

const initialState: IMain = {
  headerConfig: {
    isFixed: false
  }
}

// 1.创建slice
const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeHeaderConfigAction(
      state,
      { payload }: { payload: HeaderConfigType }
    ) {
      state.headerConfig = payload
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
export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer
