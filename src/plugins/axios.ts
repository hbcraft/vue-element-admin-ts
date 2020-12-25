import Axios, { AxiosRequestConfig } from 'axios'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const axios = Axios.create(config)

axios.interceptors.request.use(
  (config) => {
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
  (response) => {
    // Do something with response data
    console.log(response)
    switch (response.data.code) {
      case 200:
        console.log('成功')
        break
      default:
        console.log('默认')
        break
    }
    return response
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
