import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios'

declare module 'axios/index' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise;
    request<T = any>(config: AxiosRequestConfig): Promise<ResponseWrap<T>>;
    get<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ResponseWrap<T>>;
    post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ResponseWrap<T>>;
    put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ResponseWrap<T>>;
    patch<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ResponseWrap<T>>;
  }
  interface AxiosInterceptorManager {
    use(
      onFulfilled?: (res: AxiosResponse<ResponseWrap>) => ResponseWrap|Promise,
      onRejected?: (error: Error) => Promise
    ): number;
    use(
      onFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig,
      onRejected?: (error: Error) => Promise
    ): number;
  }
}
