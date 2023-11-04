import axios from 'axios'
import { store } from '../store'
import { login } from '../store/auth/authSlice'

export const BASE_URL = ''

const headers = {
   'Content-type': 'application/json',
}

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   const token = store.getState().login.accessToken
   //   const token = "ссылка с свагера";
   if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`
   }
   return updatedConfig
})

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         store.dispatch(login())
      }
   }
)
