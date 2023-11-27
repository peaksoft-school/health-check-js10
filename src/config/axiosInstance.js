import axios from 'axios'
import { store } from '../store'
import { logout } from '../store/auth/authSlice'

export const BASE_URL =
   'http://ec2-3-71-86-3.eu-central-1.compute.amazonaws.com'

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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDE4Njg4ODQsImlhdCI6MTcwMDA1NDQ4NCwidXNlcm5hbWUiOiJhZG1pbkBnbWFpbC5jb20ifQ.VoqDbKiA-y70DKiN-5ww77DVWSgyLfKsr6UKJRU3QFBtBptDw35xb0cjkD59iQDujuFxI5vM0kCB7amRepMmFg'
   //   const userToken = "ссылка с свагера";
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
