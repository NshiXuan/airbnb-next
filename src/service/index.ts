import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

const BASE_URL = "http://codercba.com:1888/airbnb/api"
// const BASE_URL = "http://codercba.com:9060/music-next/api"
const TIME_OUT = 1000 * 5

export interface IResultData<T> {
  code: number,
  data: T
}

class SXRequest {
  // 1.声明instance对象
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    // 2.创建axios实例
    this.instance = axios.create(config)

    // 6.全局请求拦截器
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      // console.log('请求拦截器')
      return config
    }, err => {
      return Promise.reject(err)
    })
    // 7.全局响应拦截器
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      // console.log('响应拦截器')
      return res
    }, err => {
      return Promise.reject(err)
    })
  }

  // 3.公共的请求方法
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 4.调用instance的request
      this.instance.request<T, AxiosResponse<T>>(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  // 4.get post请求
  get<T = any>(url: string, params?: any): Promise<T> {
    return this.request<T>({ url, params, method: "GET" })
  }

  post<T = any>(url: string, data?: any, headers?: any): Promise<T> {
    return this.request<T>({ url, data, headers, method: "POST" })
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new SXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
