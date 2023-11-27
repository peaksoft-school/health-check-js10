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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3MDI4ODg1MjcsImlhdCI6MTcwMTA3NDEyNywidXNlcm5hbWUiOiJiZWtuYXphcnpob2xkb3NoYmVrb3YxMUBnbWFpbC5jb20ifQ.XE5Kv3R4OoIVz6ZCUGoZKQPSnNwFonQsOKDwDVbE68_pP0Ou5kA_UJi6Lm6NjMYX5Fzo2dFCZchtkIidNIgOZA'
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
