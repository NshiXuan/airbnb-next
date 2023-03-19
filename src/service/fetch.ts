// const BASE_URL = "http://codercba.com:1888/airbnb/api"
const BASE_URL = "http://codercba.com:1888/airbnb/api"
// const BASE_URL = "https://www.jd.com/airbnb/api"
https://www.jd.com/
type configType = { url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data: any }

class SxRequest {
  baseURL: string

  constructor(config: { baseURL: string }) {
    this.baseURL = config.baseURL
  }
 

  async request<T = any>(config: configType) {
    // fetch中GET方法没有请求体 需要拼接到url中 参数直接拼接
    // const fetchURL = this.baseURL + config.url
    // /x/space/wbi/arc/search?mid=43664526
    // const fetchURL = 'http://v3.wufazhuce.com:8000/api/channel/one/0'
    // https://api.uomg.com/api/rand.music
    const fetchURL1 = 'https://api.uomg.com/api/rand.music?sort=热歌榜&format=json'
    const fetchURL2 = 'https://api.uomg.com/api/rand.music?sort=新歌榜&format=json'
    const fetchURL3 = 'https://api.uomg.com/api/rand.music?sort=原创榜&format=json'
    const fetchURL4 = 'https://api.uomg.com/api/rand.music?sort=飙升榜&format=json'
    const fetchURL5 = 'https://music.163.com/store/api/hotproduct_v2/gets?limit=60&offset=0'
    // 如果是POST 把data传递给body
    const fetchConfig: RequestInit = config.method === 'POST' ? {
      method: config.method,
      body: config.data,
      credentials: 'include'
    } : {
      method: config.method,
      credentials: 'include'
    }
    const fetchSingle = async (fetchURL: string)=> {
      const res = await fetch(fetchURL, fetchConfig) as any
      const data: T = await res.json(res)
      return data
    }
    // 获取fetch的数据并返回
    const result = {}
    const res = await fetch(fetchURL5, fetchConfig)
    const data: T = await res.json(res)
    // let result = await Promise.all([fetchSingle(`${fetchURL1}`), fetchSingle(`${fetchURL2}`), fetchSingle(`${fetchURL3}`), fetchSingle(`${fetchURL4}`)])
    // // const data: T = await res.json(res)
    // const musicMap = {
    //   '1': '热歌榜',
    //   '2': '新歌榜',
    //   '3':'原创榜', 
    //   '4': '飙升榜'
    // }
    // result = result?.map((ele: any, i: any)=> {
    //   return  {
    //     ...ele, 
    //     key : musicMap[String(i+1)]
    //   }
    // }) as any
    console.log(result, res, data, 'xl888')
    return data
  }

  get<T = any>(url: string, data?: any) {
    return this.request<T>({ url, method: 'GET', data })
  }

  post<T>(url: string, data?: any) {
    return this.request<T>({ url: url, method: 'POST', data })
  }
}

export default new SxRequest({
  baseURL: BASE_URL
})
