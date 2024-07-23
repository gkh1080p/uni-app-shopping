// 获取仓库
import { useMemberStore } from '@/stores'

// 基础地址

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 请求头
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    options.timeout = 10000
    // 添加请求token
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }

  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// 定义类型
interface Data<T> {
  code: string
  msg: string
  result: T
}

//封装axios请求
// 定义泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误->清理用户信息
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({
            url: '../pages/login/login',
          })
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网路错误,换个网试试',
        })
        reject(err)
      },
    })
  })
}
