import axios from 'axios'
import { store } from '../store'
import { logout } from '../store/auth/authSlice'

export const BASE_URL =
   // 'http://ec2-3-71-86-3.eu-central-1.compute.amazonaws.com'
   'http://3.70.97.1'
;('http://ec2-3-70-97-1.eu-central-1.compute.amazonaws.com')

const headers = {
   'Content-type': 'application/json',
}

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstance.interceptors.request.use((config) => {
   const updatedConfig = { ...config }
   // const { token } = store.getState().authorization
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDM3NTQ4MDAsImlhdCI6MTcwMTk0MDQwMCwidXNlcm5hbWUiOiJrYXJhY2hhY2hpdEBnbWFpbC5jb20ifQ.2OM-Fs9BQeODouOiIzW51-E5UcDNmO97ZEjq9_iuHvThtIXWeTxLu8FJFxHH73YeGOF39GxEor3MJZ4p8SERlw'
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
      if (error?.code === 403) {
         store.dispatch(logout())
         throw new Error('Unauthotized')
      }
      return Promise.reject(error)
   }
)

let storeForInject

export const injectStore = (_store) => {
   storeForInject = _store
   return storeForInject
}
