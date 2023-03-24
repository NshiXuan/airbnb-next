import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper'

import homeReducer from './modules/home'
import LoadingReducer from './modules/loading'
import DetailReducer from './modules/detail'

// 1.集成store
const store = configureStore({
  reducer: {
    home: homeReducer,
    loading: LoadingReducer,
    detail: DetailReducer,
  },
})

typeof store.getState

// 这是Dispatch函数的类型
export type IDispatch = typeof store.dispatch
// 整个state的类型 modules中为initialState为局部的类型
export type IRootState = ReturnType<typeof store.getState>

// 2.需要通过一个函数返回store 并使用next-redux-wrapper的createWrapper包裹
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper


