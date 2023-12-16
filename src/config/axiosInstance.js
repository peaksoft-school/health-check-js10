import axios from 'axios'
import { store } from '../store'
import { logout } from '../store/auth/authSlice'

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
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDQ0NTEyMDAsImlhdCI6MTcwMjYzNjgwMCwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.6E4MoGLKtToI7g-mUc4Izgntu3fWVXCgGdXKlMuB_Nwvxv0Je6-9binL6HEeATVhIZhhPppctYQrSCdAbweqMQ'
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
