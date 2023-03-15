const BASE_URL = 'http://codercba.com:1888/airbnb/api'

type configType = { url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data: any }

class SxRequest {
  baseURL: string

  constructor(config: { baseURL: string }) {
    this.baseURL = config.baseURL
  }

  async request<T = any>(config: configType) {
    // fetch中GET方法没有请求体 需要拼接到url中 参数直接拼接
    const fetchURL = this.baseURL + config.url

    // 如果是POST 把data传递给body
    const fetchConfig: RequestInit = config.method === 'POST' ? {
      method: config.method,
      body: config.data
    } : {
      method: config.method,
    }

    // 获取fetch的数据并返回
    const res = await fetch(fetchURL, fetchConfig)
    const data: T = await res.json()
    return data
  }

  get<T = any>(url: string, data?: any) {
    return this.request<T>({ url, method: 'GET', data })
  }

  posst<T>(url: string, data?: any) {
    return this.request<T>({ url: url, method: 'POST', data })
  }
}

export default new SxRequest({
  baseURL: BASE_URL
})
