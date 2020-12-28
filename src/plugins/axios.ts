import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Message } from 'element-ui'

const config: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
}

const axios = Axios.create(config)

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse<ResponseWrap>) => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)

axios.get = (url: string, data?: object, config?: AxiosRequestConfig) => {
  return axios({
    url,
    method: 'get',
    params: {
      ...data
    },
    ...config
  })
}

export default axios
