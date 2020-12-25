import { AxiosPromise, AxiosRequestConfig } from 'axios'

declare module 'axios/index' {
  interface AxiosInstance {
    get<T>(url: string, data?: object, config?: AxiosRequestConfig): AxiosPromise<T>;
  }
}
