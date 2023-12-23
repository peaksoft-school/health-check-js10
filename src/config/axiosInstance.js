import axios from 'axios'
import { store } from '../store'
import { logout } from '../store/auth/authSlice'

export const BASE_URL =
   // 'http://ec2-3-71-86-3.eu-central-1.compute.amazonaws.com'
   'http://3.70.97.1'
export const BASE_URL = 'http://3.70.97.1/'

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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDQ5NTY4MTYsImlhdCI6MTcwMzE0MjQxNiwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.F2vgzH-1sSjp1liDAGvcQDZG_1r2C8A4IWCxUwbekFul05BbyXL3mSCbtab1qK9gHRsu3YuDr5BzMupUwaPEfA'
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
