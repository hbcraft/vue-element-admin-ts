import axios from '@/plugins/axios'

export async function LoginAPI (data: LoginParams) {
  return await axios.post<LoginResponseData>('/login', data)
}
